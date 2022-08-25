// ------- manipulacion del DOM(Document Objet Models)  leer propiedades html desde js --------
// se declaran las variables de los elementos o etiquetas que se van a manipular 

const h1 = document.querySelector('h1'); // querySelector selecciona los elementos con sintaxis de css
// -- const p = document.querySelector('p');
// -- const parrafito = document.querySelector('.parrafito');
// -- const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*  console.log(input.value); //imprime

console.log({  //imprime las propiedades con sua valores
    h1,
    p,
    parrafito,
    pid,
    input
});

// escribir y editar html desde js
h1.innerHTML = 'Patito <br> Feo'; // permite modificar el html que este dentro de esa etiqueta h1
// h1.innerText = 'Patito <br> Feo'; // permite modificar el texto que este dentro de esa etiqueta h1
console.log(h1.getAttribute('class')); //imprime los atributos en este caso de la clase  en la consola que se encuentra en la etiqueta h1
h1.setAttribute('class', 'rojo'); // modifica los atributos en este caso de la clase que se encuentra en la etiqueta h1
h1.classList.add('rojo')// agrega atributos a la clase
h1.classList.remove('verde')// elimina atributos a la clase
input.value = "456"; // modifica la etiqueta input

// -- document.createElement('img'); //crear un elemento html desde cero
const img = document.createElement('img');
img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_2X_831950-MCO44403735097_122020-F.webp' );
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);  */

// ------- Eventos en JavaScript interactuando con los usuarios ------
function btnOnClick (){
    const sumaImput = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImput;

}