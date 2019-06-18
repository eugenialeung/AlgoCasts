// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 6
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// Solution 1
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

// Solution 2
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Solution 3
// function reverse(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i > -1; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//     console.log(reversed);
//   }

// Solution 4
// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//       reversed = character + reversed;
//       console.log(reversed);
//     }
//     return reversed;
//   }

// Solution 5
// function reverse(str) {
//     return str.split("").reduce((reversed, character) => {
//       return character + reversed;
//     }, "");
//   }
