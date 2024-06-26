window.onload = function() {
    // Obtener el valor actual del contador desde localStorage
    let visitas = parseInt(localStorage.getItem('visitas')) || 0;

    // Incrementar el contador
    visitas++;

    // Actualizar el contador en la página
    document.getElementById('contador').textContent = visitas;

    // Guardar el nuevo valor en localStorage
    localStorage.setItem('visitas', visitas);
};
