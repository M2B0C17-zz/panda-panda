// Elementos de eventos con onclick

// Al apretar en la X, la imagen debe eliminarse

// Seleccion de foto
function fotosX(){
  var fotos = document.getElementsByClass('eventX').value = "";

  // Se crea el enlace para borrar
  var paraBorrar = document.createElement('a');
  paraBorrar.setAttribute('class', 'eventX');

  // Evento
  var enlace = document.getElementsByTagName('a').addEventListener('click', function(){

  //Si no se esta en el enlace tenemos la alerta que informa como eliminar
    if(! enlace){
      alert("Si desea eliminar la imagen, debe apretar la X");
    }else {
  // se crea una variable con el padre del node para luego llamar a su hijo que borrar las fotos
        var elim = fotos.parentNode;
		    elim.removeChild(fotos);
    }
  }
}
