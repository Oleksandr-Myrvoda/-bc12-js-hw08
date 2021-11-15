import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

const saveTime = ({ seconds }) => {
  localStorage.setItem(CURRENT_TIME, seconds);
};
player.on('timeupdate', throttle(saveTime, 2000));

const savedTime = localStorage.getItem(CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.
