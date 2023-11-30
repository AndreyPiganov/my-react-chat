import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import db from './db.js';
import router from '../routes/user.routes.js';
import cors from 'cors';

export default () =>{
    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use('/api', router);
    return app;
}