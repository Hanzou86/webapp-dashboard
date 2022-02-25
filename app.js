const alert = document.querySelector('.alert');
const alertClose = document.querySelector('.alert-close');
const onOff = document.querySelector('.on-off')
const switchInput = document.querySelector('.switch-input');



function closeElement(btn) {
    btn.parentNode.style.display = 'none';
}

alertClose.addEventListener( 'click', (event) => {
    closeElement(alertClose);
})

switchInput.addEventListener('click', (event) => {
    if (onOff.textContent === 'ON') {
        onOff.textContent = 'OFF';
    } else {
        onOff.textContent = 'ON';
    }
})