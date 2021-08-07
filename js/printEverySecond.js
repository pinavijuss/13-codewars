/*const a = [2, 3, 1, 4, 2];

1) karta i sekunde isspausdinti po reiksme
2) arejuje nurodyta, kiek sekundziu reikia laukti, kol bus isspausdinta nurodyta reiksme
*/
/*const a = [2, 3, 1, 4, 2];
let index = 0
const skaiciuokle = setInterval(() => {
    if (index < a.length) {
        console.log(a[index++]);
    } else {
        clearInterval(skaiciuokle);
    }


}, 1000)
*/

function noBoringZeros(n) {

    const numStr = String(n).split('');

    console.log(noBoringZeros(6555));