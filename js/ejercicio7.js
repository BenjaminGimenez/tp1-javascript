//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let number1 = parseInt(prompt('ingrese el primer numero'))
let number2 = parseInt(prompt('ingrese el segundo numero'))
let number3 = parseInt(prompt('ingrese el tercer numero'))

if (number1 > number2 && number1 > number3) {

    //si number1 es mayor que number 2 y 3 se mostrara
    alert('el numero mayor es ' + number1)
    
} else if(number2 > number1 && number2 > number3){

    //si number2 es mayor que number 1 y 3 se mostrara
    alert('el numero mayor es ' + number2)

}else if(number3 > number1 && number3 > number2){
    
    //si number3 es mayor que number 1 y 2 se mostrara
    alert('el numero mayor es ' + number3)

} else{
    alert('los tres numeros son iguales')
}