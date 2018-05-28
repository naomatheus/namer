/* Write a naive nickname generator function that takes a name and generates a nickname that is the first 3 or 4 letters (4 letters if the 3rd is a vowel).

The nickname generator should log out the individual's full name along with their nickname in quotes, and then return the nickname.*/

function nicknameGenerator(string) {
  var nickString;
  for (var i = 0; i < string.length; i++) {
    var n = string.length;
    var vowelArray = ['a', 'e', 'i', 'o', 'u'];
    for (var j = 0; j < vowelArray.length; j++) {
      if (string.charAt(2) === vowelArray[j]) {
        nickString = string.slice( 0, string.length - n / 2 + string.charAt(2));
      } else if (string.charAt(3) !== vowelArray[j]) {
        nickString = string.slice(0, string.length - n / 2);
      }
    }
    console.log(string, 'is known as', nickString, 'for short');
    return nickString;
  }
}

nicknameGenerator('Timothy');

// function nicknameGenerator(string) {
//   var nickString
//   for (var i = 0; i < string.length; i++) {
//     var n = string.length
//     // console.log(string[i])
//     var vowelArray = ['a', 'e', 'i', 'o', 'u'];
//     for (var j = 0; j < vowelArray.length; j++) {
//     if (string.charAt(3) !== vowelArray[j]) {
//       // console.log("Char 3 is not a vowel")
//       nickString = string.slice(0, string.length - (n/2) )
//     }
//     if (string.charAt(2) === vowelArray[j]) {
//     nickString = string.slice(0, string.length - (n/2) + string.charAt(2))
//     }
//   }
//   console.log(string, "is known as", nickString, "for short")
//   return nickString
//   }
// }
// nicknameGenerator("Rafael")
