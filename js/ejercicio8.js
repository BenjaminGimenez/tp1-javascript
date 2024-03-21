//Escribe un programa que pida un número y diga si es divisible por 2

let numDiv = parseInt(prompt('ingrese un numero para dividir'))

if (numDiv % 2 === 0) {

    //si es divisible por 2 mostrara
    alert(numDiv + ' es divisible por 2')
    
}else{
    //sino mostrara
    alert('el numero ingresado no es divisible en 2')
}
