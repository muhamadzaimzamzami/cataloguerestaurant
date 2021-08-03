/* eslint-disable no-undef */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/spinner.css';
import '../styles/detail-resto.css';

import App from './views/App';
import CONFIG from './globals/config';
import { WebSocketInitiator } from './utils/websocket-initiator';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.btn-burger'),
  drawer: document.querySelector('.menu'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
