function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//masyvai.

let namas = ['Antanas', 'Laima', 'Bebras'];

console.table(namas);

console.log(namas[0]); //[pasirenku kuri noriu matyti.]
console.log(namas[1]); //[pasirenku kuri noriu matyti.]
console.log(namas[2]); //[pasirenku kuri noriu matyti.]

namas.push('Zuikis'); // Push prideda i masyvo gala zuiki.

console.table(namas);

for (let i = 0; i < 10; i++) {
    namas.push('Zuikis-' + i);  //prideda 10zuikiu.
}

console.table(namas);

let mas = [];

for ( let i = 0; i < 10; i++) {
    mas.push(random(0, 7))
}
console.table(mas)

//---------------------------------------
// Atspausdinti masyvo reiksmes stulpeliu, bet tik tas kurios didesnes uz 3.

// for (let i = 0; i < mas.length; i++) {

//     if(mas[i] > 3) {
//         console.log(mas[i]);
//     }
// }

// Paskaiciuoti masyvo elementu suma.

let bigSum = 0;

for (let i = 0; i < mas.length; i++) {

    bigSum = bigSum + mas[i];  // skaiciuoja suma.
 }
 console.log(bigSum);

 // paskaiciuoti maziausia suma.

 let minVal = mas[0];

for (let i = 1; i < mas.length; i++) {

    if (mas[i] < minVal) {
        minVal = mas[i];
    }
 }
 console.log(minVal);

 // paskaiciuoti kiek poriniu arba lyginiu reiksmiu yra masyve.

 let count = 0;

 for (let i = 0; i < mas.length; i++) {
 
     if (mas[i] % 2 == 0) {
         count++
     }
  }
  console.log(count);

  // masyvas kito lygio.

  let one = ['Nauseda', 'Antanas', 'Petras'];
  let two = ['Linas', 'Birute', 'Bebras'];
  let three = ['Tomas', 'Simas', 'Saulius'];

  let bigHouse = [];

  bigHouse.push(one);
  bigHouse.push(two);
  bigHouse.push(three);

  console.table(bigHouse);

  console.log(bigHouse[0][0]) // kreipiames i masyvo stringa. pirmas [one], antras [nauseda].
  console.log(bigHouse[2][1]) // kreipiames pas sima.

  // atspausdinti bighouse gyventoju sarasa.

  for (let i = 0; i < bigHouse.length; i++) {
    //   console.log(bigHouse[i]);

      for (let k = 0; k < bigHouse[i].length; k++) {
        console.log(bigHouse[i][k]);
      }
  }

  // su ciklu surasti kur gyvena tomas.

  for (let i = 0; i < bigHouse.length; i++) {

      for (let k = 0; k < bigHouse[i].length; k++) {
          if(bigHouse[i][k] == 'Tomas')
        console.log('Tomas gyvena:', i, k);
      }
  }