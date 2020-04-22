// $(document).ready(function(){

     /* Функция вызова модального окна overlay */
 /*   $('.shop-btn').on("click", function(){
    $('.overlay').show();
    });
  
    $('.popup-close').on("click", function(){
        $('.overlay').hide();
    }); */
  
// }); 

const popup_open = document.getElementsByClassName('shop-btn');
const popup_close = document.getElementById('popup-close');
const modal = document.getElementById('overlay');

for (var i = 0; i < popup_open.length; i++) {
    popup_open[i].onclick = function() { 
        modal.classList.remove('bounceOutDown'); 
        modal.classList.add('fadeIn'); 
        window.setTimeout(function() { 
            modal.classList.add('overlay__active');  
        }, 500);
    };
}

popup_close.onclick = function() { 
    modal.classList.add('bounceOutDown');
    modal.classList.remove('fadeIn');  
    window.setTimeout(function() { 
        modal.classList.remove('overlay__active'); 
    }, 500);
}; 

