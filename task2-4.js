// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее
// если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и
// добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

function formatString(string, maxLength = 40) {
  // Write code under this line

  if (string.length <= maxLength) {
    return string;
  } else if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

// task2 - 4.js: 17 Curabitur ligula sapien, tincidunt non.
//console.log(formatString("lkjiuioujdjvoeifeofijguwoeifguowierugwoeugwoeriug"));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
