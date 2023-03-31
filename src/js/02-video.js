import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayerEL = document.querySelector('iframe');
const player = new Player(videoPlayerEL);
const videoPlayerTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerEvent, 1000));

function onPlayerEvent({ seconds }) {
  localStorage.setItem(videoPlayerTime, `${seconds}`);
}

player.setCurrentTime(localStorage.getItem(videoPlayerTime) || 0);
