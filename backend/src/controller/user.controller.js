import pool from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiError from '../error/ApiError.js';

const generateJwt = (id,nickname,role) =>{
    return jwt.sign({id, nickname,role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}
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
            next(ApiError.badRequest('Пользователь не найден'));
            return
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            next(ApiError.internal('Указан неверный пароль'));
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
    // async logout(req,res){

    // }
    // async activate(req,res){

    // }
    // async refresh(req,res){

    // }
}
export default UserController;