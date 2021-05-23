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

socket.on('data', setData);

function setData(data){
    var a = data.color;
    var b = data.id;
    console.log("My id is: " + a + " and my color is: " + b);
    //document.getElementById("texto").value = "error"
}
