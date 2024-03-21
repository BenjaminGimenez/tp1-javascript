//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numDiv2 = parseInt(prompt('Ingrese un número:'));

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    //si el num es divisible se mostrara
    alert(numero + ' es divisible por 2, 3, 5 o 7.');
} else {

    //sino se mostrara
    alert(numero + ' no es divisible por 2, 3, 5 ni 7.');
}