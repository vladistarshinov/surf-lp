$(function(){

    $('.menu__btn').on('click', function(){
      $('.menu__btn').toggleClass('active');
      $('.aside__nav').toggleClass('active');
    });

    $('.menu__btn.active').on('click', function(){
      $('.menu__btn').removeClass('active');
      $('.aside__nav').toggleClass('active');
    });

});