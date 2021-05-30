var socket = io();
id = 0;
socket.on('connect', function() {
  socket.emit('conectado', {mesa:-1,pos:-1});
});

function cocinaUpdate(nmesa,posicion,id,texto){
  socket.emit('cocinaUpdate', { mesa: nmesa, pos:posicion, id:id, state: texto});
}

socket.on('nuevaComanda', function(data){
  console.log(data['data']);
  recogerComanda(data);
});


