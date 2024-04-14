var intervalo;

function aparecerObjetos() {
  var objetos = document.querySelectorAll('.objeto');
  var index = 0;

  // Mostrar los objetos uno por uno con un intervalo de tiempo
  intervalo = setInterval(function() {
    if (index < objetos.length) {
      objetos[index].style.display = 'block';
      index++;
    } else {
      clearInterval(intervalo); // Limpiar intervalo
      // Reiniciar la aparición de objetos después de 5 segundos
      setTimeout(function() {
        objetos.forEach(function(objeto) {
          objeto.style.display = 'none';
        });
        aparecerObjetos(); // Llamar a la función para iniciar nuevamente
      }, 2000);
    }
  }, 1000); // Cambia 1000 a la velocidad deseada en milisegundos
}

// Iniciar la aparición de objetos al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  aparecerObjetos();
});
