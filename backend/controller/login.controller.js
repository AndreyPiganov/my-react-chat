import pool from '../src/db.js';
import jwt from 'jsonwebtoken';

export default class AutheficationController{
    async signIn(req,res){
        const {nickname, password} = req.body;
        const users = await pool.query(`SELECT * FROM users`);
        const user = users.rows.find((item) => item.nickname === nickname && item.password === password);
        if(user){
            const token = jwt.sign({id: user.id, nickname: user.nickname},'secret-key')
            res.json({token,username: user.nickname});
        }else{
            res.status(401).json({error: `Неверные учетные данные ${users}`})
        }
    }
}
