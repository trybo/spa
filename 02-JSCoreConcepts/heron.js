// boki trójkąta
// a = 3;
// b = 4;
// c = 5;
// h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let heron = (a, b, c) => {
    let p = (a + b + c) / 2;
    let P = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
    return `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${P}.`;
}

console.log(heron(3, 4, 5))
