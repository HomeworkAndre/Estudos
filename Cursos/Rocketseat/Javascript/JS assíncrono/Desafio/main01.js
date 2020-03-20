var btnVerificar = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');


var idade;

function Verificar(){    
    idade = inputElement.value;
    inputElement.value = '';
}

btnVerificar.onclick = Verificar;