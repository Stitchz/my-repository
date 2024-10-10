/*2.Crea un juego donde la computadora elige un numero aleatorio entre 1 y 100 y el usuario tiene que adivinarlo. La computadora debe dar pistas de "mas alto" o "mas bajo" despues de cada intento.*/

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Math.random() Genera un número aleatorio entre 0 y 1 y Math.floor() lo redondea a su numero entero cercano, dando como resultado que juntas nos da numeros aleatorios de 1 y 100
let intentos = 3;

alert("¡Adivina...adivinador! Tienes 3 intentos para adivinar el número entre 1 y 100.");

while (intentos > 0) {
    
    let adivina = parseInt(prompt("Ingresa tu número:"));

    if (adivina === numeroSecreto) {
        alert("🎉¡Felicidades!🎉 Adivinaste el número secreto que era " + numeroSecreto);
        break;
    } else if (adivina> numeroSecreto) {
        alert("El número secreto es más bajo.🔻");
    } else if (adivina < numeroSecreto) {
        alert("El número secreto es más alto.🔺");
    }

    
    intentos--;

    if (intentos > 0) {
        alert("Te quedan " + intentos + " intento(s).");
    } else {
        alert("Perdiste 😕, no te quedan más intentos. El número secreto era " + numeroSecreto);
    }
}

