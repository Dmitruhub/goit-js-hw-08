import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(savedTime, 1000));
function savedTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
