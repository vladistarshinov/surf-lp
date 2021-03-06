import $ from 'jquery';
    
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../../assets/images/sleep/slider/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="../../assets/images/sleep/slider/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
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
