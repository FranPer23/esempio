// 4.
// Stampa solo gli elementi dispari di un array

const numbers = [10, 15, 2, 33, 55, 20, 22];

// per ogni elemento dell'array 
// SE 
// il resto della divisione per 2 diverso da 0 
// allora stampo
// ALTRIMENTI
// vado avanti (non faccio nulla)

for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // console.log(currentNumber);
    if (currentNumber%2 !== 0) {
        console.log(currentNumber, i);
    }
}

