function reverse(myString) {
  var stringSplit = myString.split();
  var reverseString = stringSplit.reverse();
  var newString = reverseString.join("");
  return newString;
}
