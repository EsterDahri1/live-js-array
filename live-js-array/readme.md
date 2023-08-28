Il for è un'operazione di interazione 
for(let i=0; i<10; i++){

}
counter; condition; incremento o decremento 


Le liste sono tipo il .classList che è un array che dobbiamo scorrere per leggere i suoi elementi che possono essere un numero o una stringa 

Quali strutture dati inserisco? quindi scrivo sempre tools 
Se voglio salvare solo un dato uso una variabile però se uso un gruppo di numeri o stringhe allora uso l'array (=è una grande scatola con tanti cassetti all'interno) 

array -> elementi -> uno o più dati 
In una lista ci posso mettere anche tante liste 

Come si scriver l'array 

const iscritti = ['Luca', 'Marco', 'Paolo'];

Può essere una lista di stringhe, una lista solo di numeri oppure ancora valori misti 
poi salvo in variabile
Poi salvo in console 


Per selezionare la prima posizione/indice è 0 non uno -> nomeArray[indiceElemento]

const iscritti = ['Luca', 'Marco', 'Paolo'];

iscritti[0]; //Luca
iscritti[1]; //Marco
iscritti[2]; //Paolo 

console.log(student.length)  //mi dà la lunghezza dell'array 


il metodo push prende e mi inserisce un elemento nella fine del mio array 
iscritti.push('Federica')


lo scritto typeof mi da la tipologia di cose che ho inserito  --> object or smth else 

Come stampare una lista? con un ciclo per poterlo scorrere 
metto il console log all'interno di un ciclo

const iscritti = ['Luca', 'Marco', 'Paolo'];

for(let index = 0; index < iscritti.length; i++){
    const iscritto = iscritti [i];
    console.log(nomi[i]);

    console.log('ciao', student);

}

index = i 

nella posizione dopo l'ultima c'è undefined 

// prima interazione se i = 0 -> iscritti[i] --> riccardo
// secondo giro se i = 1 -> iscritti[i] --> licia
// se i = 4 -> iscritti[i] --> Federica
// se i = 5 -> iscritti[i] --> undefined