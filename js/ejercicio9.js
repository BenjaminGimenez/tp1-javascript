//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt




//ESTE FUE EL QUE MAS ME COSTO, POR QUE NO LE ENCONTRE LA VUELTA, Y FUE EL UNICO AL QUE RECURRI A CHATGPT PARA RESOLVERLO
let frase = prompt('Ingrese una frase:');
let vocales = '';

let letra1 = frase.charAt(0);
if ('aeiouAEIOU'.indexOf(letra1) !== -1) {
    vocales += letra1 + ' ';
}

let letra2 = frase.charAt(1);
if ('aeiouAEIOU'.indexOf(letra2) !== -1) {
    vocales += letra2 + ' ';
}

let letra3 = frase.charAt(2);
if ('aeiouAEIOU'.indexOf(letra3) !== -1) {
    vocales += letra3 + ' ';
}

let letra4 = frase.charAt(3);
if ('aeiouAEIOU'.indexOf(letra4) !== -1) {
    vocales += letra4 + ' ';
}

let letra5 = frase.charAt(4);
if ('aeiouAEIOU'.indexOf(letra5) !== -1) {
    vocales += letra5 + ' ';
}

if (vocales.length > 0) {
    alert('Las vocales que aparecen son: ' + vocales);
} else {
    alert('No se encontraron vocales en la frase.');
}