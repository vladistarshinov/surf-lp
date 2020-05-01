let modalBtn = document.querySelectorAll('.btn-click'),
    forEach = Array.prototype.forEach;


forEach.call(modalBtn, function(b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        sDiv   = addDiv.style,
        px     = 'px',
        rect   = this.getBoundingClientRect();

    sDiv.width = sDiv.height = mValue + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}



export default modalBtn;