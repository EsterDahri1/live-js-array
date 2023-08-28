console.log('hello world!');

/*lista di elementi chiediamo all'utente un numero e con il numero lo stampo in pagina l'elemento della posizione*/

//variabile + lista

const serieTV = ['Mentalist', 'Mandalorian', 'Stranger Things'];

console.log(serieTV);

console.log(serieTV.length);

serieTV.push('Riverdale');

serieTV.push('Mare Fuori');

let userNumber = prompt(`Choose a number between 0 and ${serieTV.length - 1}`);
console.log(userNumber);

serieTV[userNumber];
console.log(serieTV[userNumber]);

let chosen = document.getElementById('chosen_TVseries');
chosen.innerHTML = serieTV[userNumber];
console.log(chosen);
