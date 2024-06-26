document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('.enlace-con-vista-previa');
    enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', function(event) {
            event.preventDefault();
            const vistaPrevia = document.createElement('div');
            vistaPrevia.className = 'vista-previa-abierta';
            vistaPrevia.innerHTML = `
                <p><strong>Título:</strong> ${this.dataset.title}</p>
                <p><strong>Descripción:</strong> ${this.dataset.description}</p>
                <p><strong>URL:</strong> ${this.href}</p>`;
            document.body.appendChild(vistaPrevia);
        });
        enlace.addEventListener('mouseleave', function() {
            document.querySelector('.vista-previa-abierta').remove();
        });
    });
});
