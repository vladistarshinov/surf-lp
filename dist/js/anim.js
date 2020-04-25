$(function(){

    var isMobile = false;
    // check width's screen
    $(document).ready( function() {
        if ($('body').width() <= 480) {
            isMobile = true;
        }
        // flag >md
        if (!isMobile) {
            new WOW().init();
        }
    } );

});