//variables hay 3 formas de hacer variables

// var producto = 'producto'; //iniciar variable
// var disponible; // iniciamos varibale sin valor

// producto=true ;//reasignar variables
// //puedo tener varias variables en un solo var
// var a1="primera",
//     a2="segunda";


// console.log(producto);

//variables con let 
// let primero ="hola";
//const no se puede cambiar las variables y no pueden iniciar sin valor
// tipos de datos
//string
//operaciones
///-----------------------------
//console.log(variable.length) esto sirve para contar cuantos caracteres hay
//indexof  me dice donde esta una palabra que yo busque
//console.log(variable.indexof("palabra abuscar"))

//numeros y operaciones
// const numero1=100;
// const numero2=200;

// console.log(numero1);
//objeto math

// let resultado;
// resultados= Math.pi

// console.log(resultado);

//incrementos sirven para ir sumando 

// let puntaje=10;
// puntaje++ ;
// puntaje--;
// console.log(puntaje)

//concatenacion________________________ de str

// const nombre ="juan";
// const email ="@gmail.com"
// console.log(nombre +" "+ email)

// templete str concatenacion. es algo que puedo ultilizar varias veces

// console.log('nombre: ${nombre}');


//OBJETO con una sola variable tengo mas opciones lo que me permite  hacer una pagina de ventas

// const producto={
//     nombre:"monitor",
//     preccio:300,
//     dispo: true
// }
// console.log(producto);
// console.log(producto.preccio);

//eliminar p agregar propiedades de una objeto

// const producto={
//     nombre:"monitor",
//     preccio:300,
//     dispo: true
// }
// delete producto.dispo;
// console.log(producto);
// console.log(producto.preccio);

// producto.imagen="jpg";

// const producto={
//     nombre:"monitor",
//     preccio:300,
//     dispo: true
// }
// // const preccio= producto.preccio;
// // console.log(producto.preccio);

// //destruturnig sacar de una estructura

// const {preccio}=producto;

// console.log(preccio)
//objetos a pesar de estar dentro de un const  se pueden modificar con  object.freeze(Nombre_Objecto) puedo evitar que el objeto se modifique
// co el metodo object.isfreezen8nombreproducto) veo si es extensible

//union de objetos


// const producto={
//     nombre:"monitor",
//     preccio:300,
//     dispo: true
// }
// const medidas={
//     peso: "kg",
//     medida: "1m"
// }
// const nuevo={...producto, ...medidas};
// console.log(producto)
// console.log(nuevo)

// //arreglos:::::: los arreglos son con coschetes
// const numeros=[10,5,54,46];

// console.log(numeros);
// console.table(numeros);


// const arreglo=["hhsh",232,null,{nom:"juan",trabajos:"pro"},[1,2,3,4]]

// console.log(arreglo)
// //acceder a los valores de una arreglo con el console.table tenemos acceso al indece
// // ejemplo para accerder ///console.log(numeros.length); esto lo que hace es que me dice cuantos elementos hay en el arreglo
// console.log(numeros[0]);

// //las iteraciones

// numeros.forEach(function(numero){
//     console.log(numero);
// })
//////////////////////////////////////////// METODOS PARA LOS ARRAYS///////////////////////////////////////7
///agregar elementos

const numeros=[10,5,54,46];

// numeros[0]=60;
numeros.push(60,50,84,66);  //7 esto siempre lo agrega hasta elfinal
console.table(numeros);









