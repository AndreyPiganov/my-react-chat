import runServer from '../src/index.js';
import dotenv from 'dotenv';
import runSocket from '../src/socket.js';
import http from 'http';

dotenv.config();

const port = process.env.PORT || 8080;
const app = runServer();
const server = http.createServer(app);

server.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});

runSocket(server);