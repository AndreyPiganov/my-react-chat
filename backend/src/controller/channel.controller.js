import pool from '../db.js';
import ApiError from '../error/ApiError.js';

class ChannelController{
    async getChannels(req,res){
        const channels = await pool.query('SELECT * from channels');
        return res.json(channels.rows);
    }
    async addChannel(req,res){
        
    }
}
export default ChannelController;