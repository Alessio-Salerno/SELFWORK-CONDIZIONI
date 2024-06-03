// let voto_numerico = prompt('Quanto hai preso?')

// if(voto_numerico <= 18){
//     console.log('Insufficiente');
// }
// else if(voto_numerico >= 18 && voto_numerico < 21){
//     console.log('Sufficiente');
// }

// else if(voto_numerico >= 21 &&  voto_numerico < 24){
//     console.log('Buono');
// }

// else if(voto_numerico >= 24 && voto_numerico < 27){
//     console.log('Distinto');
// }

// else if(voto_numerico >= 27 && voto_numerico < 29 ){
//   console.log('ottimo');
// }
// else if(voto_numerico == 30){
//     console.log('Eccellente');
// }
// else{
//     console.log('Voto non valido');
// }



let voto_numerico = 30;

let giudizio;

switch(true) {
   case voto_numerico <= 18:
    giudizio = 'insufficiente'
    break;

    case voto_numerico >= 18 && voto_numerico < 21:
        giudizio = 'sufficiente' 
    break

    case voto_numerico >= 21 &&  voto_numerico < 24:
        giudizio = 'buono'
    break;

    case voto_numerico  >= 24 && voto_numerico < 27:
        giudizio = 'distinto'
    break;    

    case voto_numerico >= 27 && voto_numerico < 29:
        giudizio = 'ottimo'
    break;

    case voto_numerico == 30:
        giudizio = 'Eccellente'
    break;
     
    default:
    giudizio = 'non valido'
}

console.log(giudizio);

