
$('.btn-pulse').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('btn-pulse__active');

    $('.menu-callback').toggleClass('menu-callback__active');
});

 $(function(){

    $('.btn-question').on('click', function() {
        $('.form-wrapper__feedback').toggleClass('active');
    });

}); 

$(function(){

    $('.btn-phone').on('click', function() {
        $('.form-wrapper__callback').toggleClass('active');
    });

}); 
