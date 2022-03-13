import './styles.css'
import './randomPhotoModule.css'

import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { RandomPhotoModule } from './modules/show.random.photo.module';
import { RandomSoundModule } from './modules/randomsound.module';
import { CastomMsg } from './modules/castommsg.module';
import { RandomFigureModule } from './modules/random.figure.module';
import { TimerModule } from './modules/timer.module';

let bgChange = new BackgroundModule('bgChange', 'Замена фона');
let clickModule = new ClicksModule('clickModule', 'Подсчет кликов');
let showRandomPhoto = new RandomPhotoModule('showRandomPhoto', 'Показать рандомное фото');
let randomSoundModule = new RandomSoundModule('randomSoundModule', 'Случайный звук');
let сastomMsg = new CastomMsg('сastomMsg', 'Случайное сообщение');
let randomFigureModule = new RandomFigureModule('randomFigureModule', 'Случайная фигура');
let timerModule = new TimerModule('timerModule', 'Таймер 5 сек');
const menuItems = [bgChange, clickModule, showRandomPhoto, randomSoundModule, сastomMsg, randomFigureModule, timerModule];

const contextMenu = new ContextMenu('.menu');
contextMenu.open();

// Собираем менюшку
menuItems.forEach(item => {
    contextMenu.add(item.type, item.text)
});

//Слушаем клики, вызываем правильный триггер
contextMenu.el.addEventListener('click', (event) => {
    menuItems.forEach(item => {
        if (event.target.id === item.type) {
            item.trigger();
        }
    })
    
})
