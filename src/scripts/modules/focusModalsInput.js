 const focusModalsInput = (InfoSelector) => {
    const info = document.querySelectorAll(InfoSelector);
            
    info.forEach(item => {
        item.addEventListener('focus', () => {
            item.parentNode.classList.add('focus');
        });

        item.addEventListener('blur', () => {
            if (item.value == '') {
                item.parentNode.classList.remove('focus');
            }
        });
   });

};

export default focusModalsInput; 