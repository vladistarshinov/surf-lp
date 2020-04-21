$(document).ready(function(){
    /* Плавный переход между секциями */
    $('a[href^="#"]').click(function(){ 
        let anchor = $(this).attr('href');  
        $('html, body').animate({           
        scrollTop:  $(anchor).offset().top}, 2000);                            
    });
  
});