//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt('ingrese un numero'))
let numero2 = parseInt(prompt('ingrese otro numero'))

if (numero1 > numero2) {

    //Si numero1 es mayor entonces se mostrará

    alert('El numero mayor es ' + numero1);

} else if (numero1 < numero2) {

    //Si numero2 es mayor, entonces esta rama se ejecuta
    alert('El numero mayor es ' + numero2);

} else {
    //si los numeros son iguales entonces se mostrara

    alert('Ambos números son iguales.');
}