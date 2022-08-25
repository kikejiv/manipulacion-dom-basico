const h1 = document.querySelector('h1'); // querySelector selecciona los elementos con sintaxis de css
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues );

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaImput = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImput;

}