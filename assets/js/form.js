//CONFIRMACIÓN DE ENVÍO DE FORMULARIO//
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const customAlert = document.getElementById('customAlert');
    const closeAlert = document.getElementById('closeAlert');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        customAlert.parentElement.classList.remove('hidden');
    });

    closeAlert.addEventListener('click', () => {
        form.submit();
    });
});