import { Socket } from "socket.io";
import {Event} from "../types/Events";
export const socketController= (socket:Socket) => {
    listenJoinRoom(socket);
}
function listenJoinRoom(socket:Socket){
    socket.on('join', (data) => {
        const roomToken = data.roomToken;
        socket.join(roomToken);
        socket.to(roomToken).emit(Event.JOIN, data)
  
        socket.on('disconnect', () => {
            socket.to(roomToken).emit(Event.DISCONNECT, data)
        })
    })
}
