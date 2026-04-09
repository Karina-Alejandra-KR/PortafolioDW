document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688889.9033803395!2d-102.45569574782492!3d25.457261687826723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629584a2a5b05d%3A0x701df442c36cbbc6!2sNuevo%20Le%C3%B3n!5e0!3m2!1ses!2smx!4v1775035896529!5m2!1ses!2smx" ></iframe>`;
    }, 500);
    
});