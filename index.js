// console.log(a);
// let a = 10;

// ==,===

// console.log(5 === "5");

// let a = 2;

// if (a % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// switch (a) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   default:
//     console.log("Default");
// }

// let res = a > 0 ? "Positive" : "Negative";
// console.log(res);

let cars = ["BMW", "Audi", "Mercedes", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

//for-of and for-in loop

// for (let car of cars) {
//   console.log(car);
// }

// for (let index in cars) {
//   console.log(cars[index]);
// }

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "Audi") {
    // console.log(cars[i]);
    // console.log("Found Audi");
    console.log("Skip Audi");
    // break;
    continue;
  }
  console.log(cars[i]);
}
