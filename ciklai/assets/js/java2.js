//Pastomate talpiname S,M,L,Xl su if ir su switch ciklu.

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

let siunta = 'M';

console.log(' Siunciam ', siunta)

//if panaudojimas.

if (siunta == 'S') {
    console.log('Telpa S');
}
if (siunta == 'S' || siunta == 'M') {
    console.log('Telpa M');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L') {
    console.log('Telpa L');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L' || siunta == 'XL') {
    console.log('Telpa XL')
}

// switch ciklas.

switch(siunta) {
    case 'S': console.log('Telpa S');
    case 'M': console.log('Telpa M');
    case 'L': console.log('Telpa L');
    default: console.log('Telpa Xl');
}

//if else panaudojimas sviesaforui.

let light = 'green';

console.log('light', light)

// if (light == 'green') {
//     console.log('Go')
// } else if (light == 'yellow') {
//     console.log('Ready');
// } else {
//     console.log('Wait');
// }

// ciklo panaudojimas sviesaforui.

switch (light) {
    case 'green': console.log('Go')
    break;
    case 'yellow': console.log('ready')
    break;
    default: console.log('wait')
}

//Uzduotys.

// 1. Ridenam kauliuka (rand 1-6), jeigu issiridena 1 arba 5 perku ledu, jeigu 2 arba 4 perku cipsu, jeigu 3 arba 6 perku pieno. Ka perkame?

   let run = random(1, 6);

   console.log('run', run);

   switch (run) {
       case 1: 
            console.log('Ledai');
            break;
        case 2: 
            console.log ('Cipsai');
            break;
       case 3:
            console.log('Pienas');
            break;
       case 4: 
            console.log ('Cipsai');
            break;
       case 5:
            console.log('Ledai');
            break;
       default:
            console.log('Pienas')
   }

   // DO WHILE ciklas. Metom kauliuka tol, kol iskrenta 5. Suskaiciuojam kiek metimo reikia.

   let run2;
   let count2 = 0;
   let saugiklis = 0; // jei kazkas nesigauna sustapdo cikla.
   do { 
    if(saugiklis++ > 100) break; // jei kazkas nesigauna sustapdo cikla.
    count2++  
    run2 = random(1, 6);
    console.log(run2)

   }while (run2 != 5);
   console.log('Prasisuko:', count2);

   // == visos lygybes pavirsta i nelygybes !=.
   // != visos neligybes pavirsta i ligybes ==.
   // > daugiau pavirsta i maziau arba lygu <=.
   // <= maziau arba lygu pavirsta i daugiau >.
   // >= daugiau arba lygu pavirsta maziau <.
   // || arba pavirsta i enda &&.
   // && endas pavirsta i arba ||.

// DO WHILE ciklas. Mesti kauliuka tol, kol iskrenta 5 arba 1.


let run3;
let count3 = 0;
do{
    run3 = random(1, 6);
    count3++
    console.log(run3)

}while (run3 != 5 && run3 != 1)
console.log('Prisuko:', count3)

// Metom kauliuka. Sustojam kai ismestu kauliuku suma tampa didesne nei 33.

let runSum = 0;
let count4 = 0;
do{
   let run4 = random(1, 6)
   console.log(run4)
   count4++
   runSum = runSum + run4;

}while (runSum <= 33);
    console.log('Prisuko:', count4, 'suma:', runSum)

// WHILE budas.

let runSum1 = 0;
let count5 = 0;

while (runSum1 <= 33) {
    let run = random(1, 6);
    console.log(run);
    count5++
    runSum1 = runSum1 + run;
}

console.log('Prisuko:', count5, 'suma:', runSum1)

// Yra 1000l vandens. Karviu banda per para isgeria atsitiktini kieki nuo 70l iki 200l. Paskaiciuoti per kiek dienu karves isgeria vandeni.

let h2o = 1000;
let days = 0;

while(h2o > 0) {
    days++;
    h2o = h2o - random(70, 200);
}

console.log('Karves numire is troskulio ' + days + ' diena ');

