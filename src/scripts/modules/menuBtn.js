const menuBtn = (menuSelector, BtnSelector) => {
    const menu = document.querySelector(menuSelector),
          btn = document.querySelector(BtnSelector);
            
          btn.addEventListener('click', () => {
            menu.classList.toggle('active');
            btn.classList.toggle('active');
        });

};

export default menuBtn;
