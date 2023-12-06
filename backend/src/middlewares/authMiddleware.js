import decodeJwt from '../utils/decodeJwt.js';

export default function(req,res,next){
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'Пользователь не авторизован'});
        }
        const decoded = decodeJwt(token);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({message: 'Пользователь не авторизован'})
    }
}