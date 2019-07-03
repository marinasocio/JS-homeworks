// Excercise 1

function multiply() {
  let a = 1;
  if (arguments.length == 0) return 0;
  for (let i = 0; i < arguments.length; i++) a *= arguments[i];
  return a;
}
console.log('Excercise 1: ', multiply(1, 2, 3));

// Excercise 2

function reverseString(str) {
  let l = 1;
  let result = '';
  for (let i = 1; i < str.length+1; i++) {
    result = result.concat(str[str.length-l]);
    l += 1;
  }
  return result;
}
console.log('Excercise 2: ', reverseString('Marina'));




