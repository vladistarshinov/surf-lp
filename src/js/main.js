import './modules/slider';
import './modules/calc';
import './modules/wowMobile';
import modals from './modules/modals';
import pulseBtn from './modules/pulseBtn';
import currentDate from './modules/currentDate';
import anchor from './modules/anchor';
import phonemask from './modules/phonemask';
import menuBtn from './modules/menuBtn';
import shopDots from './modules/shopDots';
import callbackWidget from './modules/callbackWidget';
import focusModalsInput from './modules/focusModalsInput';
import wowMobile from './modules/wowMobile';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    menuBtn('.aside__nav', '.menu__btn');
    shopDots('.surfboard-info__dots');
    focusModalsInput('.info-box__data');
    callbackWidget();
})