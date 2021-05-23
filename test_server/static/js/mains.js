var vector = {agua: 0, cocacola: 0, fanta: 0, cerveza: 0, cafe: 0, croquetas: 0, serranito: 0, solomillo: 0, tortilla:0, pescadofrito:0};
let contagua = 0; let contcocacola = 0; let contcerveza = 0; let contfanta = 0; let contcafe = 0;
let contcroquetas = 0; let contserranito = 0; let contsolomillo = 0; let conttortilla = 0; let contpescadofrito = 0;
let Precio = 0.00;

function addProduct(i){
if(i == 1) contagua = contagua + 1;  vector.agua = contagua;
if(i == 2) contcocacola = contcocacola + 1;  vector.cocacola = contcocacola;
if(i == 3) contfanta = contfanta + 1;  vector.fanta = contfanta;
if(i == 4) contcerveza = contcerveza + 1;  vector.cerveza = contcerveza;
if(i == 5) contcafe = contcafe + 1;  vector.cafe = contcafe;

if(i == 6) contcroquetas = contcroquetas + 1;  vector.croquetas = contcroquetas;
if(i == 7) contserranito = contserranito + 1;  vector.serranito = contserranito;
if(i == 8) contsolomillo = contsolomillo + 1;  vector.solomillo = contsolomillo;
if(i == 9) conttortilla = conttortilla + 1;  vector.tortilla = conttortilla;
if(i == 10) contpescadofrito = contpescadofrito + 1;  vector.pescadofrito = contpescadofrito;

document.getElementById('CantAgua').innerHTML = contagua;
document.getElementById('CantCocacola').innerHTML = contcocacola;
document.getElementById('CantFanta').innerHTML = contfanta;
document.getElementById('CantCerveza').innerHTML = contcerveza;
document.getElementById('CantCafe').innerHTML = contcafe;

document.getElementById('CantCroquetas').innerHTML = contcroquetas;
document.getElementById('CantSerranito').innerHTML = contserranito;
document.getElementById('CantSolomillo').innerHTML = contsolomillo;
document.getElementById('CantTortilla').innerHTML = conttortilla;
document.getElementById('CantPescadoFrito').innerHTML = contpescadofrito;

Precio = parseFloat(contagua*1.00+contcocacola*2.00+contfanta*1.40+contcerveza*1.50+contcafe*2.50+contcroquetas*3.50+contserranito*2.50+contsolomillo*3.00+conttortilla*3.50+contpescadofrito*4.50).toFixed(2);
document.getElementById('Precio').innerHTML = Precio;

  console.log(vector)

}

function subtractProduct(j){
if(j == 1 && contagua > 0) contagua = contagua - 1;  vector.agua = contagua;
if(j == 2 && contcocacola > 0) contcocacola = contcocacola - 1;  vector.cocacola = contcocacola;
if(j == 3 && contfanta > 0) contfanta = contfanta - 1;  vector.fanta = contfanta;
if(j == 4 && contcerveza > 0) contcerveza = contcerveza - 1;  vector.cerveza = contcerveza;
if(j == 5 && contcafe > 0) contcafe = contcafe - 1;  vector.cafe = contcafe;

if(j == 6 && contcroquetas > 0) contcroquetas = contcroquetas - 1;  vector.croquetas = contcroquetas;
if(j == 7 && contserranito > 0) contserranito = contserranito - 1;  vector.serranito = contserranito;
if(j == 8 && contsolomillo > 0) contsolomillo = contsolomillo - 1;  vector.solomillo = contsolomillo;
if(j == 9 && conttortilla > 0) conttortilla = conttortilla - 1;  vector.tortilla = conttortilla;
if(j == 10 && contpescadofrito > 0) contpescadofrito = contpescadofrito - 1;  vector.pescadofrito = contpescadofrito;

document.getElementById('CantAgua').innerHTML = contagua;
document.getElementById('CantCocacola').innerHTML = contcocacola;
document.getElementById('CantFanta').innerHTML = contfanta;
document.getElementById('CantCerveza').innerHTML = contcerveza;
document.getElementById('CantCafe').innerHTML = contcafe;

document.getElementById('CantCroquetas').innerHTML = contcroquetas;
document.getElementById('CantSerranito').innerHTML = contserranito;
document.getElementById('CantSolomillo').innerHTML = contsolomillo;
document.getElementById('CantTortilla').innerHTML = conttortilla;
document.getElementById('CantPescadoFrito').innerHTML = contpescadofrito;

Precio = parseFloat(contagua*1.00+contcocacola*2.00+contfanta*1.40+contcerveza*1.50+contcafe*2.50+contcroquetas*3.50+contserranito*2.50+contsolomillo*3.00+conttortilla*3.50+contpescadofrito*4.50).toFixed(2);
document.getElementById('Precio').innerHTML = Precio;

  console.log(vector)

}

// function recogerDatos(){
//
//     let CantidadPedida = parseFloat(document.getElementById("Cantidad").value);
//     let CantidadAgua = 0;
//     let CantidadCocacola = 0;
//     let CantidadCerveza = 0;
//     let CantidadFanta = 0;
//     let CantidadCafe = 0;
//
//     let CantidadPedida2 = parseFloat(document.getElementById("Cantidad2").value);
//     let CantidadCroquetas = 0;
//     let CantidadSerranito = 0;
//     let CantidadSolomillo = 0;
//     let CantidadTortilla = 0;
//     let CantidadPescadoFrito = 0;
//
//     let Precio = 0.00;
//
//     let Agua = document.getElementById("Agua").checked;
//     let Cocacola = document.getElementById("Coca-Cola").checked;
//     let Cerveza = document.getElementById("Cerveza").checked;
//     let Fanta = document.getElementById("Fanta").checked;
//     let Cafe = document.getElementById("Cafe").checked;
//
//     let Croquetas = document.getElementById("Croquetas").checked;
//     let Serranito = document.getElementById("Serranito").checked;
//     let Solomillo = document.getElementById("Solomillo").checked;
//     let Tortilla = document.getElementById("Tortilla").checked;
//     let PescadoFrito = document.getElementById("Pescado Frito").checked;
//
//     if(Agua){
//         CantidadAgua = CantidadPedida;
//         sessionStorage.setItem('aguaaux',CantidadPedida);
//       }
//     else if (!Agua && sessionStorage.getItem('aguaaux')){
//        CantidadAgua = sessionStorage.getItem('aguaaux');
//     }
//     else{
//        CantidadAgua = 0;
//     }
//
//     if(Cocacola){
//         CantidadCocacola = CantidadPedida;
//         sessionStorage.setItem('cocacolaaux',CantidadPedida);
//       }
//     else if (!Cocacola && sessionStorage.getItem('cocacolaaux')){
//        CantidadCocacola = sessionStorage.getItem('cocacolaaux');
//     }
//     else{
//        CantidadCocacola = 0;
//     }
//
//     if(Fanta){
//         CantidadFanta = CantidadPedida;
//         sessionStorage.setItem('fantaaux',CantidadPedida);
//       }
//     else if (!Fanta && sessionStorage.getItem('fantaaux')){
//        CantidadFanta = sessionStorage.getItem('fantaaux');
//     }
//     else{
//        CantidadFanta = 0;
//     }
//
//     if(Cerveza){
//         CantidadCerveza = CantidadPedida;
//         sessionStorage.setItem('cervezaaux',CantidadPedida);
//       }
//     else if (!Cerveza && sessionStorage.getItem('cervezaaux')){
//        CantidadCerveza = sessionStorage.getItem('cervezaaux');
//     }
//     else{
//        CantidadCerveza = 0;
//     }
//
//     if(Cafe){
//         CantidadCafe = CantidadPedida;
//         sessionStorage.setItem('cafeaux',CantidadPedida);
//       }
//     else if (!Cafe && sessionStorage.getItem('cafeaux')){
//        CantidadCafe = sessionStorage.getItem('cafeaux');
//     }
//     else{
//        CantidadCafe = 0;
//     }
//
//     if(Croquetas){
//         CantidadCroquetas = CantidadPedida2;
//         sessionStorage.setItem('croquetasaux',CantidadPedida2);
//       }
//     else if (!Croquetas && sessionStorage.getItem('croquetasaux')){
//        CantidadCroquetas = sessionStorage.getItem('croquetasaux');
//     }
//     else{
//        CantidadCroquetas = 0;
//     }
//
//     if(Serranito){
//         CantidadSerranito = CantidadPedida2;
//         sessionStorage.setItem('serranitoaux',CantidadPedida2);
//       }
//     else if (!Serranito && sessionStorage.getItem('serranitoaux')){
//        CantidadSerranito = sessionStorage.getItem('serranitoaux');
//     }
//     else{
//        CantidadSerranito = 0;
//     }
//
//     if(Solomillo){
//         CantidadSolomillo = CantidadPedida2;
//         sessionStorage.setItem('solomilloaux',CantidadPedida2);
//       }
//     else if (!Solomillo && sessionStorage.getItem('solomilloaux')){
//        CantidadSolomillo = sessionStorage.getItem('solomilloaux');
//     }
//     else{
//        CantidadSolomillo = 0;
//     }
//
//     if(Tortilla){
//         CantidadTortilla = CantidadPedida2;
//         sessionStorage.setItem('tortillaaux',CantidadPedida2);
//       }
//     else if (!Tortilla && sessionStorage.getItem('tortillaaux')){
//        CantidadTortilla = sessionStorage.getItem('tortillaaux');
//     }
//     else{
//        CantidadTortilla = 0;
//     }
//
//     if(PescadoFrito){
//         CantidadPescadoFrito = CantidadPedida2;
//         sessionStorage.setItem('pescadofritoaux',CantidadPedida2);
//       }
//     else if (!PescadoFrito && sessionStorage.getItem('pescadofritoaux')){
//        CantidadPescadoFrito = sessionStorage.getItem('pescadofritoaux');
//     }
//     else{
//        CantidadPescadoFrito = 0;
//     }
//
//     Precio = (CantidadAgua*1.00+CantidadCocacola*2.00+CantidadFanta*1.40+CantidadCerveza*1.50+CantidadCafe*2.50+CantidadCroquetas*3.50+CantidadSerranito*2.50+CantidadSolomillo*3.00+CantidadTortilla*3.50+CantidadPescadoFrito*4.50)
//     sessionStorage.setItem('precioaux',Precio);
//
//
//     document.getElementById('Precio').innerHTML = Precio;
//
//     //document.getElementById('CantAgua').innerHTML = CantidadAgua;
//     //document.getElementById('CantCocacola').innerHTML = CantidadCocacola;
//     //document.getElementById('CantFanta').innerHTML = CantidadFanta;
//     //document.getElementById('CantCerveza').innerHTML = CantidadCerveza;
//     //document.getElementById('CantCafe').innerHTML = CantidadCafe;
//
//   //  document.getElementById('CantCroquetas').innerHTML = CantidadCroquetas;
//   //  document.getElementById('CantSerranito').innerHTML = CantidadSerranito;
//   //  document.getElementById('CantSolomillo').innerHTML = CantidadSolomillo;
//   //  document.getElementById('CantTortilla').innerHTML = CantidadTortilla;
//   //  document.getElementById('CantPescadoFrito').innerHTML = CantidadPescadoFrito;//
//
//     //console.log('Cantidad pedida:'+ CantidadAgua + " " + CantidadCafe);
//     //console.log(CantidadCroquetas);
//
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  function enviarComanda(){
    var comanda = [];
  const bebidaNames = ["Agua","Cocacola","Fanta","Cerveza","Cafe"];
  const comidaNames = ["Croquetas","Serranito","Solomillo","Tortilla","PescadoFrito"];


      if(vector.agua > 0) comanda.push({product:bebidaNames[0], quantity: vector.agua});
      if(vector.cocacola > 0)comanda.push({product:bebidaNames[1], quantity: vector.cocacola});
      if(vector.fanta > 0)comanda.push({product:bebidaNames[2], quantity: vector.fanta});
      if(vector.cerveza > 0)comanda.push({product:bebidaNames[3], quantity: vector.cerveza});
      if(vector.cafe > 0)comanda.push({product:bebidaNames[4], quantity: vector.cafe});

      if(vector.croquetas > 0)comanda.push({product:comidaNames[0], quantity: vector.croquetas});
      if(vector.serranito > 0)comanda.push({product:comidaNames[1], quantity: vector.serranito});
      if(vector.solomillo > 0)comanda.push({product:comidaNames[2], quantity: vector.solomillo});
      if(vector.tortilla > 0)comanda.push({product:comidaNames[3], quantity: vector.tortilla});
      if(vector.pescadofrito > 0)comanda.push({product:comidaNames[4], quantity: vector.pescadofrito});




  console.log(comanda);

  if(comanda.length > 0) msg(comanda);

  vector.agua = 0;  vector.cocacola = 0;  vector.fanta = 0;  vector.cerveza = 0;  vector.cafe = 0;
  vector.croquetas = 0;  vector.serranito = 0;  vector.solomillo = 0;  vector.tortilla = 0;  vector.pescadofrito = 0;

  contagua = 0; contcocacola = 0; contcerveza = 0; contfanta = 0; contcafe = 0;
  contcroquetas = 0; contserranito = 0; contsolomillo = 0; conttortilla = 0; contpescadofrito = 0;
  Precio = 0.00;
  document.getElementById('CantAgua').innerHTML = contagua;
  document.getElementById('CantCocacola').innerHTML = contcocacola;
  document.getElementById('CantFanta').innerHTML = contfanta;
  document.getElementById('CantCerveza').innerHTML = contcerveza;
  document.getElementById('CantCafe').innerHTML = contcafe;

  document.getElementById('CantCroquetas').innerHTML = contcroquetas;
  document.getElementById('CantSerranito').innerHTML = contserranito;
  document.getElementById('CantSolomillo').innerHTML = contsolomillo;
  document.getElementById('CantTortilla').innerHTML = conttortilla;
  document.getElementById('CantPescadoFrito').innerHTML = contpescadofrito;

  document.getElementById('Precio').innerHTML = Precio;

    //comanda = [];


  }

    function escribirestado(){
    document.getElementById('texto').innerHTML = 'en preparacion';

}
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
