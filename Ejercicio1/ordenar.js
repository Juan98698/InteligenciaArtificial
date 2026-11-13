const numeros = [7, 6, 8, 2, 1, 4, 3, 5];

for (let i = 0; i < numeros.length - 1; i++) {

    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log("Arreglo ordenado: ", (numeros));