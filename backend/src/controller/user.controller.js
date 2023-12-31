import pool from '../db.js';
import bcrypt from 'bcrypt';
import ApiError from '../error/ApiError.js';
import generateJwt from '../utils/generateJwt.js';

class UserController{
    async createUser(req,res){
        const {nickname, password} = req.body;
        const newPerson = await pool.query(`INSERT INTO users (nickname, password) VALUES ($1, $2) RETURNING *`, [nickname,password]);
        res.json(newPerson.rows[0]);
    }
    async updateUser(req,res){
        const {id,nickname, password} = req.body;
        const updatedPerson = await pool.query(`UPDATE users SET nickname = $1, password = $2 WHERE id = $3 RETURNING *`, [nickname,password,id]);
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
    async login(req,res,next){
        const {nickname, password} = req.body;
        const users = await pool.query(`SELECT * FROM users`);
        const user = users.rows.find((item) => item.nickname === nickname);
        if(!user){
            next(ApiError.badRequest('Неверное имя пользователя или пароль'));
            return
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            next(ApiError.internal('Неверное имя пользователя или пароль'));
            return;
        }
        const token = generateJwt(user.id, user.nickname,user.role);
        res.json({token});
    }
    async registration(req,res,next){
        const {nickname, password} = req.body;
        try{
        const hashPassword = await bcrypt.hash(password,5);
        const user = await pool.query(`INSERT INTO users (nickname, password) VALUES ($1, $2) RETURNING *`, [nickname,hashPassword]);
        const token = generateJwt(user.id, user.nickname, user.role);
        res.json({token});
    } catch(error){
        next(ApiError.badRequest('Пользователь с таким именем уже существует'));
    }
    }
    async check(req,res,next) {
        const token = generateJwt(req.user.id,req.user.nickname,req.user.role);
        return res.json({token});
    }
    async sendMessage(req,res,next) {
        
        return
    }
    // async logout(req,res){

    // }
    // async activate(req,res){

    // }
    // async refresh(req,res){

    // }
}
export default UserController;