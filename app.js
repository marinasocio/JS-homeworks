// Excercise 1

function multiply() {
  let a = 1;

  if (arguments.length == 0) {
    return 0;
  }

  for (let i = 0; i < arguments.length; i++) {
    a *= arguments[i];
  }

  return a;
}

// Excercise 2

function reverseString(str) {
  let l = 1;
  let result = '';

  for (let i = 1; i < str.length + 1; i++) {
    result = result.concat(str[str.length - l]);
    l += 1;
  }

  return result;
}

// Excercise 3

function charSet(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = result.concat(' ', str.charCodeAt(i));
  }

  return result;
}

// Excercise 4

guessNumber();

function guessNumber(b) {
  while (true) {
    let a = Math.floor(Math.random() * (9)) + 1;
    b = prompt("Введите число от 1 до 10");

    if (b < 0 || b > 10) {
      alert("Вы ввели число не из диапазона 0 - 10");

    } else if (b == a) {
      alert("Вы выиграли!");
      break;

    } else {
      alert("Вы не угадали ваше число " + b + " а выпало число " + a);
      break;
    }
  }
}

// Excercise 5

const foo = [];
getArray();

function getArray() {
  let N = prompt("Введите любое целое число > 1 для создания масива:");

  if (N > 0 && N % 1 === 0) {

    for (var i = 1; i <= N; i++) {
      foo.push(i);
    }
  } else {
    alert("Вы ввели неправильное число!");
  }

  return foo;
}

// Excercise 6

doubleArray([1, 2, 3])

function doubleArray(arr) {
  return arr.concat(arr);
}


// Excercise 7

let arrs = [];
arrs[0] = [1, 2, 3];
arrs[1] = ['b', 'c'];
arrs[2] = ['marina', 'albina'];

let arrRows = [];

arrs = arrs.map(function (item) {
  return item.splice(1, arrs.length);
});

arrRows = arrRows.concat.apply(arrRows, arrs);



