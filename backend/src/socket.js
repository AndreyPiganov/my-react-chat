import {Server} from 'socket.io';

const runSocket = (server) =>{
    const io = new Server(server);
    io.on('connection', (socket) =>{
        console.log('Новое соединение:', socket.id);
        socket.on('sendMessage', (message) =>{
            console.log('message: ' + message)
            
        })
        socket.on('disconnect', () =>{
            console.log('Отключение от соединения', socket.id);
        })
    })
}

export default  runSocket;