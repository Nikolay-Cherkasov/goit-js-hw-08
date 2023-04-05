import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');

const player = new Player(iframeRef);
const localKey = 'videoplayer-current-time';

const getSeconds = localStorage.getItem(localKey);

if (getSeconds) {
  player.setCurrentTime(getSeconds);
}

player.on('timeupdate', throttle(onTypeUpdate, 1000));

function onTypeUpdate({ seconds }) {
  localStorage.setItem(localKey, seconds);
}
