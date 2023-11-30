import runServer from '../src/index.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;

runServer().listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})