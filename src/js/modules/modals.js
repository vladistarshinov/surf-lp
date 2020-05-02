const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.classList.remove('bounceOutDown'); 
                modal.classList.add('zoomIn'); 
                window.setTimeout(function() {  
                    modal.style.display = "block"; 
                }, 500);
            });
        });

        close.addEventListener('click', () => {
            modal.classList.add('bounceOutDown');
            modal.classList.remove('zoomIn'); 
            window.setTimeout(function() { 
                modal.style.display = "none";
            }, 500);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('bounceOutDown');
                modal.classList.remove('zoomIn'); 
                window.setTimeout(function() { 
                    modal.style.display = "none";
                }, 500);
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }


   bindModal('.shop-btn', '.overlay', '.overlay .popup-close');
   showModalByTime('.overlay', 60000);

};

export default modals;