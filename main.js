

document.querySelector("#btnSumar").addEventListener("click",sumarUno);
document.querySelector("#btnRestar").addEventListener("click",restarUno);
let contador=0;

function sumarUno (){
    contador = contador + 1;
    document.querySelector("#msgContador").innerHTML=contador;
};
function restarUno (){
    contador = contador - 1;
    document.querySelector("#msgContador").innerHTML=contador;
};
// Cambiar texto por otro con botones //

document.querySelector("#changeText1").addEventListener("click",original);
document.querySelector("#changeText2").addEventListener("click",cambiado);
let textUno = "Vinos Aix-en-Provence";
let textDos = "Vinos del Penedés";

function original (){
    textArea = textUno;
    document.querySelector("#textArea").innerHTML=textArea;
};
function cambiado  (){
    textArea = textDos;
    document.querySelector("#textArea").innerHTML=textArea;
};

// Cambiar color del Cuadro con botones//

document.querySelector("#colorRosa").addEventListener("click",rosa );
document.querySelector("#colorAmarillo").addEventListener("click",amarillo);


function rosa (){
    document.getElementById('areaTrabajo').style.backgroundColor = 'pink';
};
function amarillo () {
    document.getElementById('areaTrabajo').style.backgroundColor = 'rgb(227, 189, 17)';
};

// juego seleccion aleatoria participantes juego //


    let jugadores = ["Gabi", "Ana", "Jose"];
       
        console.log (jugadores);
     
    function agregarElemento(){ 
        
        let newPlayer = document.getElementById('nombreJugador').value;

        jugadores.push(newPlayer);
        console.log (jugadores);
    };
    function mostrarArreglo(){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = jugadores;
    };
    function getRandomName(){
        
        let randomElegido = Math.floor(Math.random() * jugadores.length);
        console.log (randomElegido);

        let eliminado = document.getElementById('resultEliminado');
        eliminado.innerHTML = randomElegido;

    };
   
    
    
   
