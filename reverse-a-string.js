function reverseString(str) {
// Step 1. Use the split() method to return a new array
  let splitString = str.split("");
// Step 2. Use the reverse() method to reverse the new created array
  let reverseString = splitString.reverse();
// Step 3. Use the join() method to join all elements of the array into a string
  let joinString = reverseString.join("");
//Step 4. Return the reversed string
  return joinString;
}
reverseString("hello");
// console.log(reverseString("hello"));







