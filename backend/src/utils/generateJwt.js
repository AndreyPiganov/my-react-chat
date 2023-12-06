import jwt from 'jsonwebtoken';

const generateJwt = (id,nickname,role) =>{
    return jwt.sign({id, nickname,role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

export default generateJwt;