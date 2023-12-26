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



