import jwt from 'jsonwebtoken';

const decodeJwt = (token) =>{
    return jwt.verify(token, process.env.SECRET_KEY);
};

export default  decodeJwt;