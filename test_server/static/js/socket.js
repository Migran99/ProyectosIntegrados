var socket = io();
id = 0;
socket.on('connect', function() {
  socket.emit('conectado', {mesa:nmesa,pos:posicion});
});

function msg(m){
	//socket.emit('comanda', {data: document.getElementById("texto").value, id: 0});
  socket.emit('comanda', {data: m, id: id, mesa: nmesa, pos:posicion});
  id = id + 1;
  //$(".addedDrink"). = "";
}

socket.on('update', function(data){
  document.getElementById('estadoComanda').innerHTML = data['estado'];

});

function finalizarPedido(){
  socket.emit('finalizarPedido', { mesa: nmesa, pos:posicion});
}