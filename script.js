// complete the given function

function palindrome(str) {
  let s = str.split(" ").join("");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
module.exports = palindrome
