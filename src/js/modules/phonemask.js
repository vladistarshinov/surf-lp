import IMask from 'imask';

const phonemask = document.querySelector('.popup-form__input');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
    const mask = IMask(phonemask, maskOptions);
export default phonemask;