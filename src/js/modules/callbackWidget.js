 const callbackWidget = () => {
      const btnWidget = (BtnSelector, MenuSelector) => {
            const menu = document.querySelector(MenuSelector),
                  btn = document.querySelector(BtnSelector);
      
            btn.addEventListener('click', (e) => {
                  if (e.target) {
                        e.preventDefault();
                  }

                  menu.classList.toggle(MenuSelector.slice(1) + '__active');
                  btn.classList.toggle(BtnSelector.slice(1) + '__active');

            });
      }

      const callbackPlugin = (BtnSelector, ModalSelector1, ModalSelector2) => {
            const modalSelector1 = document.querySelector(ModalSelector1),
                  modalSelector2 = document.querySelector(ModalSelector2),
                  btnQuestion = document.querySelector(BtnSelector);
      
            btnQuestion.addEventListener('click', (e) => {
                  if (e.target) {
                        e.preventDefault();
                  }
                  
                  modalSelector1.classList.toggle('active');
                  modalSelector2.classList.remove('active');

            });
      }


      btnWidget('.btn-pulse', '.menu-callback');
      callbackPlugin('.btn-question', '.form-wrapper__feedback', '.form-wrapper__callback');
      callbackPlugin('.btn-phone', '.form-wrapper__callback', '.form-wrapper__feedback');

};
export default callbackWidget;
 