// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 5));

// function concatArrays(array1, array2) {
//   if (Array.isArray(array1) && Array.isArray(array2)) {
//     return array1.concat(array2);
//   }

//   return undefined;
// }

// console.log(concatArrays("", ["a", "b"]));

// function commonLetters(a, b) {
//   if (typeof a !== "string" || typeof b !== "string") {
//     return undefined;
//   }

//   var common = [];
//   for (let index1 = 0; index1 < a.length; index1++) {
//     for (let index2 = 0; index2 < b.length; index2++) {
//       if (a[index1] === b[index2]) {
//         common.push(a[index1]);
//       }
//     }
//   }

//   return common;
// }

// console.log(commonLetters("jes", "abds"));
// var a = 10;

// switch (a) {
//   case 10:
//     console.log("this is 10");

//     break;
//   case 20:
//     console.log("this is 20");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// ["red", "green", "blue", "white", "black"];
// ["#FF0000", " #00FF00", "#0000FF", "#FFF", "#000"];

// function getHexColor(color) {
//   switch (color) {
//     case "red":
//       return "#FF0000";
//     case "green":
//       return "#00FF00";
//     case "blue":
//       return "#0000FF";
//     case "white":
//       return "#FFF";
//     case "black":
//       return "#000";
//   }
// }

// console.log(getHexColor("red"));

// function a() {

//   test = 20;
// }

// a();

// console.log(test);
// var test = 10;
// console.log(test)
// 'address'

// var a = { name: undefined, surname: "Ugljanin" };
// var aKeys = Object.keys(a);
// var aValues = Object.values(a);

// console.log(aKeys.includes("name"));

// if (a["name"] !== undefined) {
//   console.log("A objekat ima property address");
// }

// var objekat = {
//   name: "Irfan",
//   surname: "Ugljanin",
//   address: {
//     street: "Osmana Dervisurevica",
//     number: 20,
//     city: "Novi Pazar",
//   },
//   friends: [{ name: "Suad" }, { name: "Daris" }],
// };

// objekat.fullName = `${objekat.name} ${objekat.surname}`;

// console.log(objekat);

var nizKorisnika = [
  { name: "irfan", id: "123" },
  { name: "suad", id: "321" },
  { name: "nikola", id: "222" },
];

// for (let i = 0; i < nizKorisnika.length; i++) {
//   const korisnik = nizKorisnika[i];

//   if (korisnik.name === "suad") {
//     console.log(korisnik);
//   }
// }

function findObject(niz, parametar, vrednostParametra) {
  for (let i = 0; i < niz.length; i++) {
    const objekat = niz[i];

    if (objekat[parametar] === vrednostParametra) {
      return objekat;
    }
  }
}

console.log(findObject(nizKorisnika, "id", "123"));
