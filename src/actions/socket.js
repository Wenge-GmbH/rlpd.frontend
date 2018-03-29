import io from 'socket.io-client';

const socket = io('http://localhost:3002', {reconnection: true});

export default socket;
