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
        asNavFor: '.header__slider'
    });

    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.surf-slider'
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/pagination/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/pagination/arrow-right.svg" alt=""></img>',
        asNavFor: '.surf-map'
    });

    $('.content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/header/pagination/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/header/pagination/arrow-right.svg" alt=""></img>',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/slider/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/sleep/slider/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


    let sum = $('.nights').val() * $('.sum').data('nights') + ($('.guests').val() - 1) * $('.sum').data('guests');
    $('.sum').html('$' + sum);

    $('.quantity-button').on('click', function(){
        var parents = $(this).parents('.content-slider__info');
        let sum = $('.nights', parents).val() * $('.sum', parents).data('nights') + ($('.guests', parents).val() - 1) * $('.sum', parents).data('guests');
        $('.sum', parents).html('$' + sum);
    });

    $('.quantity').each(function(){
        var parents = $(this).parents('.content-slider__info');
        let sum = $('.nights', parents).val() * $('.sum', parents).data('nights') + ($('.guests', parents).val() - 1) * $('.sum', parents).data('guests');
        $('.sum', parents).html('$' + sum);
        
        }); 


});