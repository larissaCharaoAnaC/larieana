function tocaSom(idElmentoAudio){
    document.querySelector(idElmentoAudio).play();} 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//extrairde repetição - Enquanto 
while(contador < listaDeTeclas.length){
    listaDeTeclas(contador).onclick = function(){
        tocaSom('#som_tecla_splash');
    };
    contador = cntador + 1;
}

const instrumento = listaDeTeclas[contador].classList[1];
    console.log(instrumento);
    listaDeTeclas[contador].onclick = function (){
    tocaSom('#som_tecla_splash');
    }