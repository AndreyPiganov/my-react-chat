import pool from '../db.js';
import ApiError from '../error/ApiError.js';

class ChannelController{
    async getChannels(req,res){
        const channels = await pool.query('SELECT * from channels');
        return res.json(channels.rows);
    }
    async addChannel(req,res,next){
        try{
        const {name,user_id} = req.body;
        const newChannel = await pool.query('INSERT INTO channels (name, user_id) VALUES ($1, $2) RETURNING *', [name,user_id]);
        return res.json(newChannel.rows[0]);
    }catch(err){
        next(ApiError.badRequest(err.message));
    }
    }
}
export default ChannelController;