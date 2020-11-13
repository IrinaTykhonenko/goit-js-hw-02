// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
//     (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  // Write code under this line
  const stringLongestWord = string.split(" ");
  let word = 0;
  let longestWord = " ";

  for (let i = 0; i < stringLongestWord.length; i += 1) {
    if (stringLongestWord[i].length > word) {
      word = stringLongestWord[i].length;
      longestWord = stringLongestWord[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
