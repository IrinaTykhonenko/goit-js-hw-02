// const array = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const result = [];

// const getItemsString = function (array) {
//   "use strict";
//   // Write code under this line

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(`(${i + 1} - ${array[i]})\n`);
//   }
//   console.log(result.join(`\n`));
//   // init new var result
//   // write for to concatenate result
//   // return result
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// /*
// '1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong
// '
// */

// console.log(getItemsString([5, 10, 15]));
// /*
// '1 - 5
// 2 - 10
// 3 - 15
// '
// */

// const rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (let i = 0; i < rand.length; i += 1) {
//   if (rand[i] % 2 === 0) {
//     console.log("парное число: ", rand[i]);
//   }
// }

// choose the loop type
// print only odd numbers. if rand is average number break the loop

// let rand;

// while (true) {
//   rand = Math.random() * 100;
//   rand = rand - (rand % 1);
//   if (rand % 2 === 0) {
//     break;
//   } else {
//     console.log("odd number: ", rand);
//   }
//   // put your god's code here
// }

// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения(конкатенации)
// строк в формате ${ номер элемента } - ${ значение элемента } \n, где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

// //const array = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// const getItemsString = function (array) {
//   ("use strict");
//   // Write code under this line
//   let result = "";
//   for (let i = 0; i < Object.keys(array).length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//     // array.join(`(${i + 1} - ${array[i]})\n`);
//   }
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
// /*
//'1 - 5
//2 - 10
//3 - 15
//'
//* /

const array = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

const getItemsString = function (array) {
  ("use strict");
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
    // array.join(`(${i + 1} - ${array[i]})\n`);
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
