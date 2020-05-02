const anchor = [...document.querySelectorAll('a[href*="#"]')],
      animationTime = 1500,
      framesCount = 100;

    anchor.forEach(item => {
        item.addEventListener('click', e => {
            if (e.target) {
                e.preventDefault();
            }
    
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
        
            let scroller = setInterval(function() {
            let scrollBy = coordY / framesCount;
      
                if(scrollBy > window.pageYOffset - coordY && 
                                window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    
                    window.scrollBy(0, scrollBy);
                    } 
                    
                else {
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }

            }, animationTime / framesCount);

        });
    });

    export default anchor;