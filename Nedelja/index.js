// Data su 4 stringa. 

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"

//1. Proveriti koji je string najduzi i ispisati samo njega

if (string1.length > string2.length && string1.length > string3.length && string1.length > string4.length) {
    console.log(string1)
} else if (string2.length > string1.length && string2.length > string3.length && string2.length > string4.length) {
    console.log(string2)
} else if (string3.length > string1.length && string3.length > string2.length && string3.length > string4.length) {
    console.log(string3)
} else {
    console.log(string4)
}

console.log('--------------------')

//2. Ispisati najkraci string koji sadrzi rec "string"

    if (string1.length < string2.length && string1.length < string3.length && string1.length < string4.length && string1.includes("string")) {
        console.log(string1);
    } else if (string2.length < string1.length && string2.length < string3.length && string2.length < string4.length && string2.includes("string")) {
        console.log(string2);
    } else if (string3.length < string1.length && string3.length < string2.length && string3.length < string4.length && string3.includes("string")) {
        console.log(string3);
    } else {
        console.log(string4);
    }

    console.log('--------------------')

    //3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti
    // let string1 = "neki prvi string"
    // let string2 = "neki drugi string koji je i duzi string"
    // let string3 = "neki treci string koji je dugacak"
    // let string4 = "neki cetvrti"

    n = 4
    let noviString1 = (string1.substring(n))
    let noviString2 = (string2.substring(n))
    let noviString3 = (string3.substring(n))
    let noviString4 = (string4.substring(n))

    // if (noviString1.includes("string koji je")) {
    //     console.log(noviString1 + noviString2 + noviString3 + noviString4)
    // }


    console.log('--------------------')

    //SA CASA ZADACI

    //1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
    //Kolicina je zadata u gramima
    //cena je zadata po kilogramu

    let kolicinaG = 200
    let cena = 3000
    let kolicinaKg = (kolicinaG / 1000)
    let ukupnaCena = cena * kolicinaKg

    console.log(ukupnaCena);

    //Допунити 4. задатак количином новца, и исписати рачун (ако нема довољно новца, исписати поруку)

    let kolicinaNovca = 700
    let kusur = kolicinaNovca - ukupnaCena

    if (kolicinaNovca >= ukupnaCena) {
        console.log(`Vas racun iznosi ${ukupnaCena} dinara. Kusur je ${kusur} dinara.`)

    } else {
        console.log(`Nemate dovoljno novca za zeljeni artikal.`)
    }
