$(document).ready(function(){
 /* Masks */

 //Solving the problem with a click on the center (when clicked, puts in the beginning)
 jQuery(function($){
  $(".popup-form__input").click(function(){
    $(this).setCursorPosition(3);
  }).mask("+7(999) 999-9999", {autoclear: false});
  $(".popup-form__input_not").mask("+7(999) 999-9999");
  })

  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
});
