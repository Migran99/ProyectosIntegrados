 //var comandasocket = {product:["Croquetas","Serranito","PescadoFrito","Fanta","Agua"], quantity:["1","3","4","5","2"]};
   var comandaex = {Cocacola: 2, Cafe: 4};
   var vector = {Agua: 0, Cocacola: 2, Fanta: 0, Cerveza: 0, Cafe: 4, Croquetas: 0, Serranito: 0,Solomillo: 0, Tortilla:0, PescadoFrito:0};

   var prep = "";
   var ready = "";

   var idComandas = {};



function Preparacion(id){
    const texto = "En preparación";
    //console.log(idComandas);
    //console.log(idComandas[id]);
    cocinaUpdate(idComandas[String(id)]['mesa'],idComandas[String(id)]['pos'],id,texto)
    id = "state"+id;
    $('#' + id).html(texto);


}

function PedidoReady(id){
    const texto = "Preparado";
    //console.log(idComandas);
    //console.log(idComandas[id]);
    cocinaUpdate(idComandas[String(id)]['mesa'],idComandas[String(id)]['pos'],id,texto)
    id = "state"+id;
    $('#' + id).html(texto);
}

function activarBoton(id){
  mid = "desc"+String(id);
  var botonenviar = document.getElementById(mid);
  botonenviar.disabled = false;
}

function robotState(estado){
  $('#estado_robot').html(estado);
}

function recogerComanda(data){
  let comanda = data['data'];
  let nmesa = data['mesa'];
  let posicion = data['pos'];
  let totalPrice = data['total'];
  let id_pedido = data['id'];

  idComandas[id_pedido]={'mesa':nmesa,'pos':posicion}


    const prodNames = ["Agua","Cocacola","Fanta","Cerveza","Cafe","Croquetas","Serranito","Solomillo","Tortilla","PescadoFrito"];

    var textoProd = "";
    var textoCant = "";


    for(var i = 0; i < comanda.length; i++){
      textoProd = textoProd.concat(comanda[i]['product'] + "<br>");
      textoCant = textoCant.concat(comanda[i]['quantity'] + "<br>")
    }


    const html = `
                  <tr id="${id_pedido}">
                  <th scope="row" class="table-success">
                  ${textoProd}
                  </th>
                  <th class="table-success">
                  ${textoCant}

                  </th>
                  <th class="table-success" id="${"table"+id_pedido}">${nmesa}</th>
                  <th class="table-success" id="${"pos"+id_pedido}">${posicion}</th>
                  <th class="table-success" id="${"id"+id_pedido}">${id_pedido}</th>
                  <th class="table-success" id="${"price"+id_pedido}">${totalPrice+' €'}</th>
                  <th class="table-success" id="${"action"+id_pedido}">
                      <button class ="btn-danger col-12 float-right rounded"  id="${"desc"+id_pedido}" disabled onclick = "descartar(${id_pedido})">Descartar</button>
                      <br><br>
                      <button class ="btn-warning col-12 float-right rounded" onclick = "Preparacion(${id_pedido})">En preparación</button>
                      <br><br>
                      <button class ="btn-success col-12 float-right rounded" onclick = "PedidoReady(${id_pedido})">Pedido listo</button>
                  </th>
                  <th class="table-success" id="${"state"+id_pedido}"></th>
                </tr>
    `;

    $("#tabla").append(html);

  }

  function descartar(i){

    console.log("Descartando pedido: " + i);
    $('#' + i).remove();

}
