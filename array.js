const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.length = 5;
console.log(arr.length);
console.log(arr); // Output: [1, 2]
console.log(arr[2]); // Output: undefined
console.log(arr.toString()); // Output: [1, 2, 3, 4, 5]
console.log(arr.at(-1)); // Output: 4
console.log(arr.join(",")); // Output: 1,2,3,4

arr.pop();
console.log(arr); // Output: [1, 2, 3, 4]

arr.push(5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.shift();
console.log(arr); // Output: [2, 3, 4, 5]

arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4, 5]

console.log(Array.isArray(arr)); // Output: true

// delete arr[2];
// console.log(arr); // Output: [1, 2, empty, 4, 5]
// console.log(arr.length); // Output: 5

arr.splice(2, 0, 89, 90, 94);
console.log(arr);

const arr1 = [6, 7];
const arr2 = [8, 9];
const arr3 = [10, 11];

const mergedArr = arr1.concat(arr2, arr3);
console.log(mergedArr);

const mergedArr1 = [...arr1, ...arr2, ...arr3];
console.log(mergedArr1);

const tmpArr = [...mergedArr, 90, 91];
console.log(tmpArr);

const slicedArr = tmpArr.slice(2, 6);
console.log(slicedArr);

const arr4 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArr = arr4.flat();
console.log(flatArr);

function isEven(num) {
  return num % 2 === 0;
}

function multiTwo(num) {
  return num * 2;
}

const mappedArr = arr.map((num, index, arr) => {
  //   console.log(`Index: ${index}, Value: ${num}, Array: ${arr}`);
  return num * 2;
});
console.log(mappedArr);

const filteredArr = arr.filter((num) => num % 2 === 0);
console.log(filteredArr);

const finalRes = arr.filter((num) => num % 2 !== 0).map((num) => num * 3);
//   .at(-1);
console.log(finalRes);

const res = finalRes.find((x) => x === 9);
console.log(res);

let sum = 0;
for (let i = 0; i < finalRes.length; i++) {
  sum += finalRes[i];
}

console.log(sum);
sum = 0;
for (let ele of finalRes) {
  sum += ele;
}
console.log(sum);

sum = 0;
for (let index in finalRes) {
  sum += finalRes[index];
}
console.log(sum);
sum = 0;
finalRes.forEach((num) => {
  //   console.log(num);
  sum += num;
});
console.log(sum);

const reducedSum = finalRes.reduce((acc, num) => {
  acc += num;
  return acc;
}, 0);
console.log(reducedSum);
let res1 = arr
  .filter((num) => num % 2 !== 0)
  .map((num) => num * 3)
  .reduce((acc, num) => acc + num, 0);
console.log(res1);

const newArr = [6, 7, 8, 9, 6, 10];

console.log(newArr.indexOf(6, 1)); // Output: 4
console.log(newArr.lastIndexOf(6)); // Output: 4
console.log(newArr.includes(6)); // Output: true

// const newRes2 = newArr.filter((num) => num > 8);
// const newRes2 = newArr.find((num) => num > 8);
const newRes2 = newArr.findLast((num) => num > 8);
// const newRes2 = newArr.findIndex((num) => num > 8);
// const newRes2 = newArr.findLastIndex((num) => num > 8);
console.log(newRes2);
