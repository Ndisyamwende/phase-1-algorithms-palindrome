function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;


/*pdedocode
-----------
function isPalindrome(str);
lowercaseStr = convert str to Lowercase
reverseStr = reverse lowercaseStr
return lowercaseStr equals reversedStr
*/

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Convert the input string to lowercase for case-insensitive comparison
  const lowercaseStr = str.toLowerCase();

  // Reverse the string by splitting it into an array of characters,
  // reversing the array, and joining it back into a string
  const reversedStr = lowercaseStr.split('').reverse().join('');

  // Check if the original and reversed strings are the same
  return lowercaseStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("robot"));  // false
console.log(isPalindrome("Able was I ere I saw Elba"));  // true
console.log(isPalindrome("Palindrome"));  // false
console.log(isPalindrome(""));  // true (empty string is considered a palindrome)
