//crear variables para cambiar color de input
var darClickInputUno = document.getElementById('crearLista');
	darClickInputUno.onclick = remplazarInputUnoCrearListaYCrearInput;

var crearTablero = document.getElementById('crearTablero');
 
// var contenerdorDivInput = document.getElementById('contenedorDiv');
var prueba = document.getElementById("prueba");

var crearInputUno = document.createElement('input');
	crearInputUno.setAttribute('autofocus', '');
	crearInputUno.setAttribute('class', 'col-xs-12')
	crearInputUno.setAttribute('id', 'crearInput');

var crearBotonTablero = document.createElement('button');
	crearBotonTablero.innerHTML="Guardar";
	crearBotonTablero.setAttribute('class','btn');

var crearSpanUno = document.createElement('span');
	crearSpanUno.setAttribute('class', 'fa fa-close');

function remplazarInputUnoCrearListaYCrearInput(){

	prueba.style.margin = "0% 18%";

	var crearDivRemplzaInput = document.createElement('div');
		crearDivRemplzaInput.setAttribute('class','row col-xs-2 fondodivTablero');
		
 	crearTablero.appendChild(crearDivRemplzaInput);
 	crearDivRemplzaInput.appendChild(crearInputUno);
 	crearDivRemplzaInput.appendChild(crearBotonTablero);
 	crearDivRemplzaInput.appendChild(crearSpanUno);

 	//Evento para validar texto y guardar
 	crearBotonTablero.onclick = guardar;
 	//Evento para borrar con span
	crearSpanUno.onclick = borrarTableroYregresaInput;

} 
	
function borrarTableroYregresaInput() {
	crearTablero.parentNode.removeChild(crearTablero);

	prueba.style.margin = "0% 18%";
	darClickInputUno.onclick = remplazarInputUnoCrearListaYCrearInput;
} 

function guardar() {
	if (crearInputUno.value === "") {
		crearInputUno.setAttribute('placeholder', 'Ingresa texto válido');
		crearInputUno.setAttribute('autofocus', '');
		return false;
	} 
	//Crear y asignar atributos
	prueba.style.margin = "0% 18%";

	var divTarjetaTexto =document.createElement('div');
		divTarjetaTexto.setAttribute('class', 'col-xs-2 fondodivTableroNuevo animated swing');
		divTarjetaTexto.setAttribute('id', 'divTarjetaTexto');

	var h4 = document.createElement('h4');
		h4.innerHTML = crearInputUno.value;

	var enlaceDentroDiv = document.createElement('a');
		enlaceDentroDiv.innerHTML="Añade una tarjeta";
		enlaceDentroDiv.setAttribute('class', 'enlaceDentroDivTarjeta');

	//Guardar o concatenar las variables antes creadas
	crearTablero.appendChild(divTarjetaTexto);
	divTarjetaTexto.appendChild(h4);
	divTarjetaTexto.appendChild(enlaceDentroDiv);


	//Funcion para cambiar tarjeta por textarea
	function cambiarTarjetaPORtextarea() {
		var divTextAreaButtonSpan = document.createElement('div');

		var areaDeTextoCambio = document.createElement('textarea');
			areaDeTextoCambio.setAttribute('autofocus', '');
			areaDeTextoCambio.setAttribute('class', 'col-xs-12 areaTextChange');

		var buttonDentroDivAnadir = document.createElement('button');
			buttonDentroDivAnadir.innerHTML="Añadir";
			buttonDentroDivAnadir.setAttribute('class', 'btn btn-default');

		var crearSpanDos = document.createElement('span');
			crearSpanDos.setAttribute('class', 'fa fa-close');

			divTextAreaButtonSpan.appendChild(areaDeTextoCambio);
			divTextAreaButtonSpan.appendChild(buttonDentroDivAnadir);
			divTextAreaButtonSpan.appendChild(crearSpanDos);

			//Remplaza el enlace <a>, por un textarea
			enlaceDentroDiv.appendChild(divTextAreaButtonSpan);
			enlaceDentroDiv.parentElement.replaceChild(divTextAreaButtonSpan, enlaceDentroDiv);


		//Funcion para validar el texto dentro del textarea y guardarlo en un div para meterlo en una Tarjetra
		function validarTextAnadirText() {
			if (areaDeTextoCambio.value == "") {
				areaDeTextoCambio.setAttribute('autofocus', '');
				areaDeTextoCambio.setAttribute('placeholder', 'Ingresa texto tarjeta');
				return false;
				//si lo valida
			}	

		var tarjetaTextoDiv = document.createElement('div');
			tarjetaTextoDiv.setAttribute('class', 'label-default tarjetaTextoh3Style animated swing');
			tarjetaTextoDiv.setAttribute('id', 'tarjetaTextoDivId');
			tarjetaTextoDiv.id ="tarjetaTextoDivId" + (new Date()).getTime();
			tarjetaTextoDiv.setAttribute('draggable', 'true');

		var textoh3IncluirTarjeta = document.createElement('h3');
			textoh3IncluirTarjeta.innerHTML=areaDeTextoCambio.value;
			textoh3IncluirTarjeta.setAttribute('id', 'textoh3IncluirTarjeta');

			divTarjetaTexto.appendChild(tarjetaTextoDiv);
			tarjetaTextoDiv.appendChild(textoh3IncluirTarjeta);

			//Eventos que detonan Funciones
			divTarjetaTexto.ondragover = allowDrop;
			divTarjetaTexto.ondrop = drop;
			tarjetaTextoDiv.ondragstart = drag;

		//Comenzar en 0 el input de Inicio
		areaDeTextoCambio.value = "";
		} buttonDentroDivAnadir.onclick=validarTextAnadirText;

			//destino
			function allowDrop(ev) {
	    		ev.preventDefault();

	    		this.classList.remove("animate");
			}
		
			//destino
			function drag(ev) {
			    // ev.dataTransfer.setData("text", ev.target.id);
			    // event.target.appendChild(document.getElementById('tarjetaTextoDivId'));
			    ev.dataTransfer.setData("text", ev.target.id);
			    this.style.backgroundColor = "#0094ae";

			}

			//fuente
			function drop(ev) {
	    		ev.preventDefault();
			    var data = ev.dataTransfer.getData("text");
	    		ev.target.appendChild(document.getElementById(data));

	    		this.classList.add("animate");
			}


	}	enlaceDentroDiv.onclick = cambiarTarjetaPORtextarea;

	// function borrarTableroYregresaInput() {
	// crearTablero.parentNode.removeChild(crearTablero);

	// prueba.style.margin = "0% 0%";
	// darClickInputUno.onclick = remplazarInputUnoCrearListaYCrearInput;
	// }

	//Comenzar en 0 el input de Inicio
	crearInputUno.value = "";
}