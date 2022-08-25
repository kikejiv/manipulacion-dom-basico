Test de JavaScript

 --- Variables y operaciones ---

1. Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
// es un espacio reservado en memoria y me sirve para guardar datos

¿Cuál es la diferencia entre declarar e inicializar una variable?
// cuando se declara una variable es decirle al programa que se va a utilizar, cuando se inicializa es cuando se le da un valor

¿Cuál es la diferencia entre sumar números y concatenar strings?
//sumar un numero es realizar una operacion matematica, concatenar es unir dos o mas datos

¿Cuál operador me permite sumar o concatenar?
// el signo +

2.  Determina el nombre y tipo de dato para almacenar en variables la siguiente información:


Nombre: "String"
Apellido: "String"
Nombre de usuario en Platzi: "String"
Edad: number
Correo electrónico: "String"
Mayor de edad: boolean
Dinero ahorrado: number
Deudas: number

3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let name= "Jose";
let lastName = "Valencia";
let nickName = "Kike";
let age = 36;
let email = "jiv@gmail.com";
let adult = true;
let savingMoney = 3000000;
let debts = 1250000;

4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

let name = "Jose";
let lastName = "Valencia";

console.log("mi nombre es: " + name + " " + lastName) 

-Dinero real (dinero ahorrado menos deudas)

let savingMoney = 3000000;
let debts = 1250000;

let realMoney = savingMoney - debts 
console.log ("En total mi dinero es " + realMoney )


--- Funciones ---

1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
// es la manera en que se encapsula un bloque de codigo que realiza determinada operacion para reutilizarla en un futuro

- ¿Cuándo me sirve usar una función en mi código?
// cuando necesito repetir ese fragmento de codigo

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
//la diferencia radica que los parametros es lo que recibe cuando las creamos y los argumentos es lo que le enviamos cuando las ejecutamos

2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

 const name = "Juan David";
 const lastname = "Castro Gallego";
 const completeName = name + lastname;
 const nickname = "juandc";

 console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// 
  function saludo (name, lastName, nickName){
	let completeName = name + " " + lastName;
	console.log ("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".")
};
   fullName('Karina', 'Castillo', 'Kari')


--- Condicionales ---

1. Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
// es una instruccion que ejecuta un bloque de codigo dependiendo la evaluacion de la condicion

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// los mas usados son if, if... else, swicht
   if, si la condicion sencilla si cumple ejecute la instruccion 
   if else,  si la condicion se cumple ejecute si no se cumple haga lo otro.
   switch, evalua varios casos pero solo ejecuta uno

- ¿Puedo combinar funciones y condicionales?
// si se pueden combinar

2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//	
  const tipoDeSuscripcion = "Basic";
	
   if(tipoDeSuscripcion == "Free"){
	console.log("Solo puedes tomar los cursos gratis");
	
   }else if (tipoDeSuscripcion == "Basic"){
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
	
   }else if (tipoDeSuscripcion == "Expert"){
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

   }else if (tipoDeSuscripcion == "expertPlus"){
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
   }else
	console.log("Deberias suscribirte a Platzi");


3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).  
 
// let suscripcion = {
	Free : "Solo puedes tomar los cursos gratis",
	Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
	Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
	ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};
suscripcion.Basic


// ----- solucion propuesta---

function conseguirSuscripcion(suscripcion) {
 
  if (suscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
    return;
  }

   if (suscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
  }

  if (suscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
  }

  if (suscripcion == 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
  }

  console.warn('Ese tipo de suscripcion no existe')
}

// ----bonus--- 
let tipoSuscripcion;

	if(tipoSuscripcion) {
		
	 let suscripcion = {
		Free : "Solo puedes tomar los cursos gratis",
		Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
		Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
		ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}};	

console.log(suscripcion );

// ----- solucion propuesta---

const tipoSuscripciones = {
  Free : "Solo puedes tomar los cursos gratis",
		Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
		Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
		ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function conseguirTipoSuscripcion(suscripcion) {
  if (tipoSuscripciones[susripcion]) {
    console.log(tipoSuscripciones[susripcion]);
    return;
  }

}

--- Ciclos ---

1. Responde las siguientes preguntas en la sección de comentarios:

-¿Qué es un ciclo?
// es una secuencia de instrucciones de codigo que se ejecuta repetidas veces

- ¿Qué tipos de ciclos existen en JavaScript?
// los mas usuados son el for, do while, while

- ¿Qué es un ciclo infinito y por qué es un problema?
//es cuando escribimos una condicion que nunca se puede dar o se nos olvida incrementar la variable y se queda eternamente repitiendose, es un problema porque el programa se queda colgado

- ¿Puedo mezclar ciclos y condicionales?
//si se pueden combinar

2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {   3.14 3.11 2.3
    console.log("El valor de i es: " + i);
}

// 
  let i = 0;

  while (i < 5){
	console.log("El valor de i es: " + i);
    i++;
	
}

  let i = 10;

  do {
	i--;
	console.log("El valor de i es: " + i);
  }
   while (i >= 2)	
  
3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

  let respuesta;

while (respuesta != '4'){
let pregunta = prompt("Cuanto es 2 + 2?"); 
respuesta = pregunta;
}


--- Listas ---

1. Responde las siguientes preguntas en la sección de comentarios:

.¿Qué es un array?
//es un objeto similar a una lista que proporciona metods para efectuar operaciones de recorrido y mutacion

-  ¿Qué es un objeto?
//es una estructura que tiene propiedades y metodos y son usados para almacenar colecciones de varios  datos y entidades

- ¿Cuándo es mejor usar objetos o arrays?
// depende de lo que necesitemos, si vamos a utiolizar una variable con multipples valores utilizariamos un  array pero si neceitamos utilizar varias variables con sus valores utilizariamos uin objeto

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//si se pueden mezclar ambos

2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// function arreglo (){
	let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
	console.log(dias[0]);
  };

  arreglo()

  // otro ejemplo //
   function imprimirPrimerElemento(arr) {
     console.log(arr[0])
     };
     
     imprimirPrimerElemento(['Juanita', 'Roberto', 'Kike'])

   }

3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

// 
    let fruta = ['mango', 'fresa', 'piña', 'mora', 'limon'];

   function frutas(fruta){
	    for( i= 0; i < fruta.length; i++ ){
	      console.log(fruta[i]) 
   }
   }
    frutas(fruta);


4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

  var carro = {
    marca: 'Mazda',
    modelo: 'Cx7',
    anno: 2022,
    color: 'Negro'
    puertas: 5,
  };
  function miCarro(auto){
	for(let array in auto)
	console.log(auto[array])
  }
  miCarro(carro);