import socket from './socket';
import { STREAM_IMAGE } from './types';

export const plateImage = () => dispatch => {
  // console.log(socket);
  socket.on('plate-image', (data) => {
    // console.log('socket', data);
    dispatch({
      type: STREAM_IMAGE,
      data
    })
  })
}
