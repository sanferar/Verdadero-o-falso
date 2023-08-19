

/* Variables  --------------------------------------*/
const sfTemporizador = document.getElementById('tiempo-total');
const contadorPreguntas = document.getElementById('numero-preguntas');
const contadorPreguntasLive = document.getElementById('numero-preguntas-live');
const contadorPuntos = document.getElementById('resultado');
const contadorF = document.getElementById('contadorf');
const contadorA = document.getElementById('contadora');
const contadorAfin = document.getElementById('contadora-fin')
const estdAcierto = document.getElementById('estd-aciertos');
const numeroPreguntas = document.getElementById('numero-preguntas');
const enunciadoPregunta = document.querySelector('.pregunta');
const btnVerdadero = document.querySelector('.btn-verdadero');
const btnFalso = document.querySelector('.btn-falso');
const btnStart = document.querySelector('.btn-start');
const btnRestart = document.querySelector('.btn-restart');
const pantallaStart = document.querySelector('.pantalla-start');
const pantallaFin = document.querySelector('.pantalla-fin');
const pctj = document.getElementById('porcentaje-acierto');
const acordeonPreguntasFalladas = document.querySelector('.accordion-body');
const tarjetaMove = document.getElementById('tarjeta-move');
const rpc = document.getElementById('rpc');
const resultadosEf = document.getElementById('enunciados-fallados')
const botonCompartir = document.getElementById('enlace-compartir-w');
const cardUno = document.querySelector('.card-1');
const cardDos = document.querySelector('.card-2');
const cardTres = document.querySelector('.card-3');

/* Barra de progreso ---------------------------- */
const barraProgreso = document.querySelector('.progress-bar');
function actualizarBarraProgreso() {
  const porcentaje = (sfTiempoTotal / 100) * 100; // Calcula el porcentaje de tiempo restante
  barraProgreso.style.width = porcentaje + '%'; // Actualiza el ancho de la barra de progreso

  if (porcentaje >= 80) {
    barraProgreso.classList.remove('bg-info');
    barraProgreso.classList.add('bg-success');
  }
  if (porcentaje >= 40 && porcentaje < 80) {
    barraProgreso.classList.remove('bg-warning', 'bg-success');
    barraProgreso.classList.add('bg-info');
  }
  if (porcentaje <= 30) {
    barraProgreso.classList.remove('bg-danger');
    barraProgreso.classList.add('bg-warning');
  }
  if (porcentaje <= 10) {
    barraProgreso.classList.remove('bg-warning');
    barraProgreso.classList.add('bg-danger');
  }
}


/* Ripple effect -----------------------------------*/

const btnVerdaderoRipple = document.querySelector(".btn-ripple-verdadero");
const btnFalsoRipple = document.querySelector(".btn-ripple-falso");


/* Efecto confetti -------------------------------- */

const panelCanvas = document.getElementById('my-canvas');


function efectoConfeti() {
  var confettiSettings = { 
    target: 'my-canvas' 
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 4000);
}


/* Preguntas utilizadas -------------------------- */
const historialRespuestasPreguntas = [];
const historialPreguntas = [];
const historialPreguntasFalladas = [];
const enunciadosFallados = [];


/* Contadores   --------------------------------------*/
let sfTiempoTotal = 30;
let preguntasContadas = 0;
let contador = 0;
let contadorFalladas = 0;
let contadorAciertos = 0;
let porcentajeAcierto = 0;

let resultadoPuntos;
let resultadoFallos;
let resultadoAciertos;
let resultadoTotalPreguntas;
let resultadoPercentAciertos;
let datosResultados;


/* Funciones de comprobación de nivel ------------------------- */
/* Funciona comprobación de nivel 1 ------------------- */

let nivelUnoAlcanzado = false;

function comprobacionNivel() {
  if (!nivelUnoAlcanzado && sfTiempoTotal >= 40 && estdAcierto.innerText >= 50) {
    let contenedorLogroUno = document.createElement("div");
    contenedorLogroUno.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512.62 512.62" xml:space="preserve">
    <g>
      <polygon style="fill:#FFCD00;" points="478.28,128.15 328.15,131.89 256.31,0 256.31,512.62 328.15,380.73 478.28,384.47 
        399.98,256.31 	"/>
      <polygon style="fill:#FFDA44;" points="184.47,131.89 34.34,128.15 112.64,256.31 34.34,384.47 184.47,380.73 256.31,512.62 
        256.31,0 	"/>
    </g>
    </svg>`;
    efectoConfeti()
    contenedorLogroUno.classList.add('contenedor__logro__1')
    document.querySelector('.contenedor__logros').appendChild(contenedorLogroUno);
    alert('¡¡Has alcanzado nivel 1 🎉🎉!! ¡¡Has conseguido una ⭐!!')
    nivelUnoAlcanzado = true;
    
  }
}

/* Funciona comprobación de nivel 2 ------------------- */

let nivelDosAlcanzado = false;

function comprobacionNivelDos() {
  if (!nivelDosAlcanzado && sfTiempoTotal >= 50 && estdAcierto.innerText >= 60) {
    let contenedorLogroDos = document.createElement("div");
    contenedorLogroDos.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512.62 512.62" xml:space="preserve">
    <g>
      <polygon style="fill:#FFCD00;" points="478.28,128.15 328.15,131.89 256.31,0 256.31,512.62 328.15,380.73 478.28,384.47 
        399.98,256.31 	"/>
      <polygon style="fill:#FFDA44;" points="184.47,131.89 34.34,128.15 112.64,256.31 34.34,384.47 184.47,380.73 256.31,512.62 
        256.31,0 	"/>
    </g>
    </svg>`;
    contenedorLogroDos.classList.add('contenedor__logro__2')
    document.querySelector('.contenedor__logros').appendChild(contenedorLogroDos);
    alert('¡¡Has alcanzado nivel 2 🎉🎉!! ¡¡Has conseguido tu segunda ⭐!!')
  
    nivelDosAlcanzado = true;
  }
}

/* Comprobación de nivel 3 --------------------- */

let nivelTresAlcanzado = false;

function comprobacionNivelTres() {
  if (!nivelTresAlcanzado && sfTiempoTotal >= 80 && estdAcierto.innerText >= 90) {
    let contenedorLogroTres = document.createElement("div");
    contenedorLogroTres.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512.62 512.62" xml:space="preserve">
    <g>
      <polygon style="fill:#FFCD00;" points="478.28,128.15 328.15,131.89 256.31,0 256.31,512.62 328.15,380.73 478.28,384.47 
        399.98,256.31 	"/>
      <polygon style="fill:#FFDA44;" points="184.47,131.89 34.34,128.15 112.64,256.31 34.34,384.47 184.47,380.73 256.31,512.62 
        256.31,0 	"/>
    </g>
    </svg>`;
    contenedorLogroTres.classList.add('contenedor__logro__3')
    document.querySelector('.contenedor__logros').appendChild(contenedorLogroTres);
    alert('¡¡Has alcanzado nivel 3 🎉🎉!! ¡¡Lograste las tres estrellas ⭐!!')
    nivelTresAlcanzado = true;
  }
}

/* Juego acabado--------------------- */
function juegoFin() {
  if (sfTiempoTotal >= 100) {
    return alert('🎉🎉 ¡Te has pasado el juego! 🎉🎉 ');
  }
}

/* Gestion de de los datos para almacenar en el cliente ----------------------- */

function guardarPuntos() {
  resultadoPuntos = contadorPuntos.innerText;
  resultadoFallos = contadorF.innerText;
  resultadoAciertos = contadorA.innerText;
  resultadoTotalPreguntas = contadorPreguntasLive.innerText;
  resultadoPercentAciertos = estdAcierto.innerText;

  let datosResultados = {
    resultadoPuntos,
    resultadoAciertos,
    resultadoFallos,
    resultadoTotalPreguntas,
    resultadoPercentAciertos,
    historialPreguntas,
    historialPreguntasFalladas,
  };

  // Guardar los puntos en el almacenamiento local como una cadena
  sessionStorage.setItem('resultadosPartida', JSON.stringify(datosResultados));
}

if (document.body.classList.contains('index')) {
  window.addEventListener('load', () => {
    const primeraPregunta = seleccionPregunta();
    preguntasContadas++;
    contadorPreguntasLive.innerHTML = preguntasContadas;
    enunciadoPregunta.classList.remove('hide');
    let cuentaAtras = setInterval(() => {
      sfTiempoTotal--;
      pintarCuentaAtras();
      actualizarBarraProgreso(); // Llama a la función para actualizar la barra de progreso
      if (sfTiempoTotal <= 0) {
        guardarPuntos();
        location.href = './fin-juego.html';
      }
    }, 1000)
  });



  function seleccionPregunta() {
    fetch('./plazos_lopacaapp.json')
      .then(response => response.json())
      .then(data => {
        let obj = data[Math.floor(Math.random() * data.length)];
        let diasPlazo = obj.dias;
        let textoEnunciado = obj.enunciado;
        let articulo = obj.articulo;
        let objResp = obj.correcta;
        console.log(objResp)
        historialRespuestasPreguntas.push(objResp);
        historialPreguntas.push(obj);
        enunciadoPregunta.innerHTML = `Se dispone de ${diasPlazo}. ${textoEnunciado} ${articulo}`;
      }
      );
  };

  btnVerdadero.addEventListener('click', () => {
    seleccionPregunta();
    checker('Verdadero');
    btnVerdadero.disabled = true;
    btnFalso.disabled = true;
    cardUno.classList.add('tarjeta-movimiento-1-ocultar')
    cardDos.classList.add('tarjeta-movimiento-2-ocultar')
    cardTres.classList.add('tarjeta-movimiento-3-ocultar')

    setTimeout(function () {
      btnVerdadero.disabled = false;
      cardUno.classList.add('tarjeta-movimiento-1')
      cardDos.classList.add('tarjeta-movimiento-2')
      cardTres.classList.add('tarjeta-movimiento-3')
      cardUno.classList.remove('tarjeta-movimiento-1-ocultar')
      cardDos.classList.remove('tarjeta-movimiento-2-ocultar')
      cardTres.classList.remove('tarjeta-movimiento-3-ocultar')
    }, 1000);
    setTimeout(function () {
      btnFalso.disabled = false;
    }, 1000);
  });

  btnFalso.addEventListener('click', () => {
    seleccionPregunta()
    checker('Falso');
    btnVerdadero.disabled = true;
    btnFalso.disabled = true;
    cardUno.classList.add('tarjeta-movimiento-1-ocultar')
    cardDos.classList.add('tarjeta-movimiento-2-ocultar')
    cardTres.classList.add('tarjeta-movimiento-3-ocultar')
    setTimeout(function () {
      btnVerdadero.disabled = false;
    }, 1000);
    setTimeout(function () {
      btnFalso.disabled = false;
      cardUno.classList.add('tarjeta-movimiento-1')
      cardDos.classList.add('tarjeta-movimiento-2')
      cardTres.classList.add('tarjeta-movimiento-3')
      cardUno.classList.remove('tarjeta-movimiento-1-ocultar')
      cardDos.classList.remove('tarjeta-movimiento-2-ocultar')
      cardTres.classList.remove('tarjeta-movimiento-3-ocultar')
    }, 1000);
  });

  function borrarClassMove() {
    tarjetaMove.classList.remove('moviendo-tarjeta-verdadero');
    tarjetaMove.classList.remove('moviendo-tarjeta-falso');
  };

  /* Comprobación de respuestas ------------------------ */
  function checker(respuesta) {
    if (respuesta == historialRespuestasPreguntas[historialRespuestasPreguntas.length - 1]) {
      contador++;
      sfTiempoTotal += 5
      pintarContador();
      preguntasContadas++;
      pintarPreguntas();
      contadorAciertos++;
      pintarContadorAciertos();
      formularPorcentaje();
      pintarPorcentajeAciertos();
      tarjetaMove.classList.add('moviendo-tarjeta-verdadero');
      juegoFin();
      setTimeout(() => {
        borrarClassMove();
      }, 1000);
    } else {
      contador--;
      if (sfTiempoTotal >= 5) {
        sfTiempoTotal -= 5;
      }
      let ultimaPreguntaFallada = historialPreguntas[historialPreguntas.length - 1];
      historialPreguntasFalladas.push(ultimaPreguntaFallada)
      pintarContador();
      preguntasContadas++;
      pintarPreguntas();
      contadorFalladas++;
      pintarContadorFallos();
      formularPorcentaje();
      pintarPorcentajeAciertos();
      let enunciadoPreguntaFallada = enunciadoPregunta.outerText;
      enunciadosFallados.push(enunciadoPreguntaFallada);
      sessionStorage.setItem('enunciadosFallados', JSON.stringify(enunciadosFallados));
      tarjetaMove.classList.add('moviendo-tarjeta-falso');
      juegoFin();
      setTimeout(() => {
        borrarClassMove();
      }, 1000);
    }
    comprobacionNivel();
    comprobacionNivelDos();
    comprobacionNivelTres()

  };


  const pintarPreguntas = () => {
    contadorPreguntasLive.innerHTML = preguntasContadas;
  };

  const pintarContador = () => {
    contadorPuntos.innerHTML = contador;
  };

  const pintarContadorFallos = () => {
    contadorF.innerHTML = contadorFalladas;
  };

  const pintarContadorAciertos = () => {
    contadorA.innerHTML = contadorAciertos;
  };

  const pintarCuentaAtras = () => {
    sfTemporizador.innerHTML = sfTiempoTotal;
  };

  const pintarPorcentajeAciertos = () => {
    estdAcierto.innerHTML = formularPorcentaje();
  }

  const formularPorcentaje = () => {
    return ((contadorAciertos / (preguntasContadas - 1)) * 100).toFixed(2);
  };

}



if (document.body.classList.contains('fin-partida')) {


  // Función que recupera los puntos del almacenamiento local y los muestra en la página
  function mostrarPuntos() {
    // Recuperar los puntos del almacenamiento local como una cadena
    let datosAlmacenados = JSON.parse(sessionStorage.getItem('resultadosPartida'));
    contadorPuntos.innerText = datosAlmacenados.resultadoPuntos;
    contadorF.innerText = datosAlmacenados.resultadoFallos;
    contadorA.innerText = datosAlmacenados.resultadoAciertos;
    contadorPreguntasLive.innerText = datosAlmacenados.resultadoTotalPreguntas;
    estdAcierto.innerText = datosAlmacenados.resultadoPercentAciertos;



    datosAlmacenados.historialPreguntasFalladas.forEach((item, index) => {

      const collapseId = `collapseExample${index}`; // Generar un identificador único para cada elemento desplegable


      resultadosEf.innerHTML += `
      <div class='li_contenedor_resultados'>
        <div class= 'li_contenedor_resultados_item'>
          <li>${item.dias}. ${item.enunciado}. // Ref. Art: ${item.articulo}</li>
        </div>
        <div class= 'li_contenedor_resultados_item2'>
          <li>Respuesta correcta: <span class="badge text-bg-success"> ${item.correcta}</span></li>
          <div class="boton-info-articulo">
          <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
          Leer artículo
        </button>
          </div>
          <div class="collapse" id="${collapseId}">
            <div class="card card-body">
              ${item.informacion}
            </div>
          </div>
        </div>
      </div>
      `;
    });

    datosAlmacenados.historialPreguntas.forEach((item) => {
      document.getElementById('historial-total-preguntas').innerHTML += `
      <div class='li_contenedor_resultados'>
        <div class= 'li_contenedor_resultados_item'>
          <li>${item.dias}. ${item.enunciado}. // Ref. Art: ${item.articulo}</li>
        </div>
        <div class= 'li_contenedor_resultados_item2'>
          <li>Respuesta correcta: <span class="badge text-bg-success"> ${item.correcta}</span></li>
        </div>
      </div>
      `;
    });
  }



  window.onload = function () {
    mostrarPuntos();
  };



  botonCompartir.addEventListener('click', () => {
    let datosAlmacenados = JSON.parse(sessionStorage.getItem('resultadosPartida'));
    let enunciadosF = JSON.parse(sessionStorage.getItem('enunciadosFallados'));
    contadorPuntos.innerText = datosAlmacenados.resultadoPuntos;
    contadorF.innerText = datosAlmacenados.resultadoFallos;
    contadorA.innerText = datosAlmacenados.resultadoAciertos;
    contadorPreguntasLive.innerText = datosAlmacenados.resultadoTotalPreguntas;
    estdAcierto.innerText = datosAlmacenados.resultadoPercentAciertos;
    var resultadoCompartir = datosAlmacenados.resultadoPercentAciertos;
    let resultadoCantidadPreguntas = datosAlmacenados.resultadoTotalPreguntas;
  })



  const botonRestart = document.getElementById('enlace-btn-restart');




  botonRestart.addEventListener('click', () => {
    sessionStorage.clear();
    location.href = './inicio.html';
  })


  /* Para realizar la captura de la pantalla */
  document.getElementById('enlace-compartir-w').addEventListener('click', function () {
    html2canvas(document.body).then(function (canvas) {
      var link = document.createElement('a');
      link.download = 'captura.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });

}



