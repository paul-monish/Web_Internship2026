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
    // console.log("Skip Audi");
    // break;
    continue;
  }
  // console.log(cars[i]);
}

// STRING
let name = "John Doe";
let str = "Hello, " + name + "!";
let str1 = `Hello, ${name}!`;
// console.log(str);
// console.log(str1);
// console.log(name.length);
console.log(name.charAt(0));
console.log(name.at(2));
console.log(name[3]);
console.log(name.charCodeAt(5));
console.log(name.charAt(name.length - 2));
console.log(name.at(-2));
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));
console.log(text1 + " " + text2);
console.log(`${text1} ${text2}`);

let text = "Apple, banana, Kiwi, Banana";
console.log(text.slice(7, 13));
console.log(text.slice(-12, -6));
console.log(text.substring(7, 13));
console.log(text.substr(7, 6));

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let text3 = "      Hello World!      ";
console.log(text3.trim());
console.log(text3.trimStart());
console.log(text3.trimEnd());

let text4 = "6";
console.log(text4.padStart(4, "0"));
let text5 = "6";
console.log(text5.padEnd(4, "0"));

console.log(name.repeat(3));

console.log(text.replace("Banana", "Mango"));
console.log(text.replace(/Banana/gi, "Mango"));
console.log(text.replaceAll(/Banana/gi, "Mango"));

console.log(text.split(", "));
let strArr = text.split(", ");

console.log(strArr[0]);

// for (let fruit of strArr) {
//   console.log(fruit);
// }

// for (let index in strArr) {
//   console.log(strArr[index]);
// }

console.log(strArr.join("| "));
let text6 = "Apple, banana, Kiwi, banana";
console.log(text6.indexOf("banana"));
console.log(text6.indexOf("banana", 10));
console.log(text6.lastIndexOf("banana"));

console.log(text6.search("mango"));
console.log(text6.search(/banana/gi));

console.log(text6.includes("mango", 10));

console.log(text6.startsWith("banana"));
console.log(text6.endsWith("Apple"));

function greet(...name) {
  console.log("Arguments passed:", arguments);
  arguments.length > 0
    ? console.log("Arguments passed")
    : console.log("No arguments passed");
  return `Hello, ${name.join(", ")}!`;
}
console.log(greet("John", "Doe", "Smith"));

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function sum_new() {
  let total = 0;
  console.log(typeof arguments);
  for (let idx in arguments) {
    total += arguments[idx];
  }
  return total;
}

console.log(sum_new(1, 2, 3, 4, 5));
