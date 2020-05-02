import WOW from 'wowjs';

let isMobile = false;
// check width's screen
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.clientWidth <= 480) {
        isMobile = true;
    }
    // flag >md
    if (!isMobile) {
        new WOW.WOW().init();
    }
});