import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './router/index.js';
import cors from 'cors';
import errorHandler from './middlewares/errorHandlingMiddleware.js';
export default () =>{
    const app = express();
    app.use(cors());
    app.use(express.json())
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use('/api', router);
    app.use(errorHandler);
    return app;
}