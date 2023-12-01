import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import db from './db.js';
import userRouter from '../routes/user.routes.js';
import cors from 'cors';
import loginRouter from '../routes/login.routes.js';

export default () =>{
    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use('/api', userRouter);
    app.use('/api', loginRouter);
    return app;
}