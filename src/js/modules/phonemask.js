import IMask from 'imask';

const phonemask = document.querySelectorAll('.popup-form__input');
  
  phonemask.forEach(item => {
      const maskOptions = {
          mask: '+{7}(000)000-00-00'
        };
      const mask = IMask(item, maskOptions);
  });

export default phonemask;