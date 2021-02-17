let osp;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("Lo siento, tu navegador no soporta esta función.");
    } else {
    	osp = new webkitSpeechRecognition();
      osp.lang = "es";
    	osp.continuous = true;
    	osp.interim = true;
    	osp.addEventListener("result",iniciar);
      osp.addEventListener("result",iniciar2);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
    document.getElementById('texto').innerHTML = event.results[i][0].transcript;
	}
}
function iniciar2(event){
  for (let i = event.resultIndex; i < event.results.length; i++){
    document.getElementById('texto2').innerHTML = event.results[i][0].transcript;
  }
  var txt = document.getElementById("texto2");
  console.log(texto2.innerHTML);
}

/* tr = google.language.translate("Hello world", "en", "es", function(result) {
  if (!result.error) {
    var container = document.getElementById("texto2");
    container.innerHTML = result.translation;
    console.log(container.innerHTML);
  }
});
 */
const btnboton = document.getElementById('boton');
btnboton.addEventListener('click', () => {
  if (btnboton) {
    osp.start();
    console.log("Activado");
    alert("Ahora puedes hablar...");
  }
});

const btnboton2 = document.getElementById('boton2');
btnboton2.addEventListener('click', () => {
  if (btnboton2) {
    osp.stop();
    console.log("Desactivado");
  }
});


function copiarAlPortapapeles(id_elemento){
  var y = document.createElement("input");
  y.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(y);
  y.select();
  document.execCommand("copy");
  document.body.removeChild(y);
}

function copiarAlPortapapeles2(id_elemento) {
  var w = document.createElement("input");
  w.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(w);
  w.select();
  document.execCommand("copy");
  document.body.removeChild(w);
}