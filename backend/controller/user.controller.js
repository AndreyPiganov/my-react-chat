import pool from '../src/db.js';

class UserController{
    async createUser(req,res){
        const {nickname, password} = req.body;
        const newPerson = await pool.query(`INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *`, [nickname,password]);
        res.json(newPerson.rows[0]);
    }
    async updateUser(req,res){
        const {id,nickname, password} = req.body;
        const updatedPerson = await pool.query(`UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING *`, [nickname,password,id]);
        res.json(updatedPerson.rows[0])
    }
    async deleteUser(req,res){
        const {id} = req.params;
        const deletedPerson = await pool.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);
        res.json(deletedPerson.rows[0]);
    }
    async getUsers(req,res){
        const users = await pool.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
    async getUserById(req,res){
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        res.json(user.rows[0]);
    }
}
export default UserController;