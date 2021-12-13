function isPalindrome(word) {
  let flag = true;
  let len = word.length;
  for (let pos = len; pos > 0; pos--) {
    if (word[pos - 1] != word[len - pos]) {
      flag = false;
      break;
    }
  }
  return flag;
//  flag ? `${str} is a palindrome` : `${str} is NOT a palindrome`
}

/* 
  set a flag to false
  set a variable to the length of the string
  loop through the string comparing the last character to the first, the next to the last to the 2nd, etc.
  if they don't match, set flag to false, and break
*/

/*
  loop through the string from end to start
  compare character at loop iterator to character at iterator - string length
  once they don't match, it's not a palindrom

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
