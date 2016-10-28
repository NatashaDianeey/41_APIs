//Crear variables para 
var btnClickInput = document.getElementById('crearLista');
	btnClickInput.onclick =  crearLista;

var crearTarjeta = document.getElementById('crearTarjeta');

var createInput = document.createElement('input');
	createInput.setAttribute('autofocus', '');
	createInput.setAttribute('id','cajaTexto');

var createSpan = document.createElement('span');
 	createSpan.setAttribute('class', 'fa fa-close');

function crearLista(){

	var createForm = document.createElement('div');
		createForm.setAttribute('class','fondo');
		
	var createButton = document.createElement('button');
		createButton.innerHTML="Guardar";
 	   	createButton.setAttribute('class','btn btn-default'); 
 	
 	// var createSpan = document.createElement('span');
 	// 	createSpan.setAttribute('class', 'fa fa-close');

 	crearTarjeta.appendChild(createForm);
 	createForm.appendChild(createInput);
 	createForm.appendChild(createButton);
 	createForm.appendChild(createSpan);

	createButton.onclick = guardar;
	createSpan.onclick = presionarTache;	
}

//función para validar y guardar el texto al hacer click en el boton Guardar
function presionarTache(){
	crearTarjeta.parentNode.removeChild(crearTarjeta);
}

//función para validar y guardar el texto al hacer click en el boton Guardar
function guardar() {
	if (createInput.value === "") {
		createInput.setAttribute('placeholder', 'Ingresa texto válido');
		createInput.setAttribute('autofocus', '');
		return false;
	} 

	//Crear y asignar atributos
	var divTarjetaTexto =document.createElement('div');
		divTarjetaTexto.setAttribute('class', 'fondo');
		divTarjetaTexto.setAttribute('id', 'divTarjetaTexto');


	var h4 = document.createElement('h4');
		h4.innerHTML = createInput.value;


	var enlaceDentroDiv = document.createElement('a');
		enlaceDentroDiv.innerHTML="Añade una tarjeta";
		enlaceDentroDiv.setAttribute('class', 'enlaceDentroDivTarjeta');


	//Guardar o concatenar las variables antes creadas
	crearTarjeta.appendChild(divTarjetaTexto);
	divTarjetaTexto.appendChild(h4);
	divTarjetaTexto.appendChild(enlaceDentroDiv);


	//Funcion para cambiar 
	function changeTarjetVStextarea() {
		var divTextAreaButtonSpan = document.createElement('div');

		var areaTextoCambio = document.createElement('textarea');
			areaTextoCambio.setAttribute('autofocus', '');
			areaTextoCambio.setAttribute('class', 'areaTextChange');

		var buttonDentroDivAnadir = document.createElement('button');
			buttonDentroDivAnadir.innerHTML="Añadir";
			buttonDentroDivAnadir.setAttribute('class', 'btn btn-default');

			divTextAreaButtonSpan.appendChild(areaTextoCambio);
			divTextAreaButtonSpan.appendChild(buttonDentroDivAnadir);
			divTextAreaButtonSpan.appendChild(createSpan);

			//Remplaza el enlace <a>, por un textarea
			enlaceDentroDiv.appendChild(divTextAreaButtonSpan);
			enlaceDentroDiv.parentElement.replaceChild(divTextAreaButtonSpan, enlaceDentroDiv);

		//Funcion para validar el texto dentro del textarea y guardarlo en un div para meterlo en una Tarjetra
		function validarTextAnadirText() {
			if ( areaTextoCambio.value == "") {
				areaTextoCambio.setAttribute('autofocus', '');
				areaTextoCambio.setAttribute('placeholder', 'Ingresa texto tarjeta');
				return false;
				//si lo valida
			}	

		var tarjetaTextoDiv = document.createElement('div');
			tarjetaTextoDiv.setAttribute('class', 'label-default tarjetaTextoh3Style animated swing animated');
			tarjetaTextoDiv.setAttribute('id', 'tarjetaTextoDivId');
			tarjetaTextoDiv.id ="tarjetaTextoDivId" + (new Date()).getTime();
			tarjetaTextoDiv.setAttribute('draggable', 'true');

		var textoh3IncluirTarjeta = document.createElement('h3');
			textoh3IncluirTarjeta.innerHTML=areaTextoCambio.value;
			textoh3IncluirTarjeta.setAttribute('id', 'textoh3IncluirTarjeta');

			divTarjetaTexto.appendChild(tarjetaTextoDiv);
			tarjetaTextoDiv.appendChild(textoh3IncluirTarjeta);

			//Eventos que detonan Funciones
			divTarjetaTexto.ondragover = allowDrop;
			divTarjetaTexto.ondrop = drop;
			tarjetaTextoDiv.ondragstart = drag;

		//Comenzar en 0 el input de Inicio
		areaTextoCambio.value = "";
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
			    this.style.backgroundColor = "green";

			}

			//fuente
			function drop(ev) {
	    		ev.preventDefault();
			    var data = ev.dataTransfer.getData("text");
	    		ev.target.appendChild(document.getElementById(data));

	    		this.classList.add("animate");
			}

	} enlaceDentroDiv.onclick = changeTarjetVStextarea;

	//Comenzar en 0 el input de Inicio
	createInput.value = "";
}