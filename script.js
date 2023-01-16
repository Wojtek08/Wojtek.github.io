var content = document.getElementById("nav1");
var button = document.getElementById("button");

button.onclick = function() {

    if(content.className == "open") {
        content.className = ""
        // button.innerHTML ==
    } else {
        content.className = "open"
    }

};

// let kura = 25;

// let temperature = 30;

// switch (temperature) {
//     case -10:
//         console.log("b. zimno");
//         break;
//     case 0:
//         console.log("zimno");
//         break;
//     case 10:
//         console.log("wiosna");
//         break;
//     case 20:
//         console.log("lato");
//         break;
//     case 30:
//         console.log("goraco");
//         break;
//     case 40:
//         console.log("b. goraco");
//         break;
// }

// if (temperature < -10) {
//     console.log("zostajemy w domu");
// } else if (temperature > 40) {
//     console.log("zostajemy tez w domu");
// } else {
//     console.log("mozna isc")
// }

//--------------------------------

// let i = 0;

// while (i < 5) {
//     console.log("wartosc i wynosi:", i);
//     i = i + 1;
// }

// let a = 20;

// do {
//     console.log("a:", a);
//     a = a - 1;
// } while (a >= 20);

// console.log("koniec")

// console.log("Koniec")

// //b++ to samo co b = b + 1

// for (let b = 0; b < 3; b++) {
//     console.log("b:", b)
// }

//--------------------------------

// let a = -2

// for (let a = -2; a <= 2; a++) {
//     if (a < 0) {
//         console.log("liczba", a, "jest ujemna");
//     } else if (a == 0) {
//         console.log("liczba", a, "jest zerowa");
//     } else if (a > 0) {
//         console.log("liczba", a, "jest dodatnia");
//     }
// }
// while (a <= 2) {
//     if (a < 0) {
//         console.log("mniejsza od zera", a)
//     } else if (a == 0) {
//         console.log("zero", a)
//     } else if (a > 0) {
//         console.log("dodatnia", a)
//     }
//     a++
// }

// function dodawanie(a, b) {
//     let c = a + b;
//     console.log("Wynik", c);
// }

// dodawanie (8, 3);
// dodawanie (20, 11);

// let x = 10;
// let y = 45;

// if (x > 5) {
//     dodawanie(x, y)
// }

//--------------------------------

// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(15, 4);
// console.log("Result:", result)

// //Wyrazenie funkcyjne - function expression
// let division = function(a, b) {
//     return a / b;
// }

// let divisionResult = division(100, 3);
// console.log("wynik dzielenia:", divisionResult)

// console.log("Wynik dzielenia to:", division(100, 5))

// //Oba poprawne

//-------------------------------

// let a = 10;
// let b = 10;

// function substract(a,b) {
//     let substraction = a - b;
//     if (substraction < 0) {
//         console.log("Wartosc bezwzgledna: ", substraction * -1)
//     } else {
//         console.log("Wartosc bezwzgledna: ", substraction)
//     }
// }

// substract(a,b)


//KURS - 2:25:14