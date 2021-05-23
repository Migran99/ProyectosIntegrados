let Frase;
let rec;
    if (!("webkitSpeechRecognition" in window)) {
      alert("Lo siento, no se puede usar la API");
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-ES";
        rec.continuous = true;
        rec.interim = true;
        rec.addEventListener("result",iniciar);
    }
function iniciar(event){
  for(i = event.resultIndex; i < event.results.length; i++){

      document.getElementById('texto').innerHTML = event.results[i][0].transcript;
      Frase = event.results[i][0].transcript;
      //document.write(Frase);

  }
}

rec.start();
