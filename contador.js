document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el valor actual del contador almacenado en localStorage
    let visitas = parseInt(localStorage.getItem('visitas')) || 0;

    // Incrementa el contador
    visitas++;

    // Almacena el nuevo valor del contador en localStorage
    localStorage.setItem('visitas', visitas);

    // Muestra el contador en la página
    document.getElementById('contador').textContent = visitas;
});
