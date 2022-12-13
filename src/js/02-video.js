import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const playerOn = new Player(iframe);
let currentTime = 0;

playerOn.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
console.log(playerOn)
currentTime = localStorage.getItem('videoplayer-current-time')

playerOn.setCurrentTime(currentTime);
