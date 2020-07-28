const shopDots = (BtnSelector) => {
    const btn = document.querySelectorAll(BtnSelector);
            
    btn.forEach(item => {
          item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

};

export default shopDots;