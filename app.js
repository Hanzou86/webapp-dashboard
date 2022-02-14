const alert = document.querySelector('.alert');
const alertClose = document.querySelector('.alert-close')

function closeElement(btn) {
    btn.parentNode.style.display = 'none';
}

alertClose.addEventListener( 'click', (event) => {
    closeElement(alertClose)
})