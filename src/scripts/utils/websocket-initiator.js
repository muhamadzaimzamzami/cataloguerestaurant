import NotificationHelper from './notification-helper';
// import CONFIG from '../globals/config';

let socket = null;
const WebSocketInitiator = {
  init(url) {
    socket = new WebSocket(url);
    console.log('ws connected to => ', socket.url);

    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: resto.name,
      options: {
        body: resto.review,
        icon: 'icons/192x192.png',
        image: 'https://i.ibb.co/nBh3jrM/roompy-android-web.png',
        vibrate: [200, 100, 200],
      },
    });
  },
};

const sendDataToWebsocket = (reviewData) => {
  const data = JSON.stringify(reviewData);

  socket.send(data);
};

export { WebSocketInitiator, sendDataToWebsocket };
