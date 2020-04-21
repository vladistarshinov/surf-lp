$(function(){

  $('.header__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/pagination/arrow-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/pagination/arrow-right.svg" alt=""></img>',
      asNavFor: '.slider-pagination'
  });

  $('.slider-pagination').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.header__slider',
      responsive: [
        {
          breakpoint: 561,
          settings: "unslick"
        },
      ]
  });

  $('.surf-map').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.surf-slider',
      responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 3,
            centerMode: true,
          }
        },

        {
          breakpoint: 951,
          settings: {
            slidesToShow: 1.5,
            centerMode: true,
          }
        },

        {
          breakpoint: 601,
          settings: {
            slidesToShow: 0.85,
            centerMode: true,
          }
        },

        {
          breakpoint: 401,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },

        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
          }
        },

      ]
  });

  $('.surf-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/pagination/arrow-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/pagination/arrow-right.svg" alt=""></img>',
      asNavFor: '.surf-map', 
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            centerMode: true,
          }
        },

        {
          breakpoint: 901,
          settings: {
            slidesToShow: 1.625,
            centerMode: true,
          }
        },

        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },

        {
          breakpoint: 401,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },

      ]
  });

  $('.content-slider, .shop-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/pagination/arrow-left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/pagination/arrow-right.svg" alt=""></img>',
  });

});