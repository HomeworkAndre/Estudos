var btnVerificar = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');


var idade;

function Verificar(){    
    idade = inputElement.value;
    inputElement.value = '';
}

function checaIdade(idade) { 
      // Retornar uma promise 
}

checaIdade(20)
.then(function() {
       console.log("Maior que 18");
})
.catch(function() {
        console.log("Menor que 18");
});
 

btnVerificar.onclick = Verificar;