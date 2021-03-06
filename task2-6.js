// Конструкция new Array(10) создаст массив, длинной в 10 элементов.
// Значения в таком массиве будут отсутствовать, т.е.не будет даже undefined.
// Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

// Есть еще способ создания и заполнения массива - можно создать пустой массив[]
// и заполнять его методом push()

// Быстрая обработка массива
// Преимущество создания массива заданной длины перед добавлением в пустой массив в том,
// что метод push() медленнее обрабатывается.

//  Если`new Array()` будет содержать более одного аргумента,
//     то будет создан массив с элементами из аргументов.

// пример
// new Array(3);
// // [,,]

// new Array(1, 2, 3);
// // [1, 2, 3]

function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
