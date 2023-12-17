import pool from '../db.js';
import ApiError from '../error/ApiError.js';

class MessageController{
    async getAllMessages(req,res){
        const messages = await pool.query('SELECT * from messages');
        return res.json(messages.rows);
    }
    async getAllMessagesByChannelId(req,res){
        const {id} = req.params;
        const channel = await pool.query('SELECT * FROM channels WHERE name = $1',[id]);
        const dataChannel = channel.rows[0]
        const messages = await pool.query('SELECT * FROM messages WHERE channel_id = $1',[dataChannel.channel_id]);
        return res.json(messages.rows);
    }
    // async addMessage(req,res,next){
    //     try{
    //     const {name,user_id} = req.body;
    //     const newMessage = await pool.query('INSERT INTO channels (name, user_id) VALUES ($1, $2) RETURNING *', [name,user_id]);
    //     return res.json(newMessage.rows[0]);
    // }catch(err){
    //     next(ApiError.badRequest(err.message));
    // }
    // }
}
export default MessageController;