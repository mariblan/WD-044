// Conditionals

const numString = '22';
let num;

// if conditinal
if (!num) {
  console.log('Num is empty');
}

// if/ else if / else conditional
if (numString === 22) {
  console.log(numString);
} else if (numString === '22') {
  console.log(typeof numString);
  console.log(typeof '23');
} else if (numString == 22) {
  console.log(
    `${numString} has the same value of number 22 but not te same type!`
  );
} else {
  console.log(numString);
}

let num2 = 22;
const number = 'number';

// ternary conditional
num2 === 'number'
  ? console.log(`${num2} is a number`)
  : console.log(`${num2} is not a number`);
num2 == '22' ? console.log(true) : console.log(false);
typeof num2 === 'num' ? console.log(true) : console.log(false);
// switch

let fruit = 'mango';

fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log(`I like ${fruit}!`);
    break;
  case 'papaya':
    console.log(`I like ${fruit}!`);
    break;
  case 'mango':
    console.log(`I like ${fruit}!`);
    break;
  default:
    console.log(`I don't like ${fruit}s.`);
    break;
}
