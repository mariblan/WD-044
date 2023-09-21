//ARRAYS
const myNumber = [1, 2, 3, 4, 5];
const myStringArray = ['Maria', 'Luisa', 'Ana'];
console.log(myNumber, myStringArray);
console.log(myNumber[5], myStringArray[2]);
// LENGTH -> gives you the length of the array
console.log(myNumber.length);
// SORT -> sorts the array of strings alphabetically and of numbers
// from smaller to bigger
console.log(myStringArray.sort());
// PUSH -> adds an item to the array.
myStringArray.push('Marta');
console.log(myStringArray);
// JOIN -> creates a string with the array separated by what
// you write between the parenthesis of the method.
console.log(myStringArray.join(', '));
// SLICE -> cuts the array in parts by the index you write in the
// parenthesis of the method.
console.log(myStringArray.slice(1, 4));
// POP -> takes away the last item of the array
console.log(myStringArray.pop());
console.log(myStringArray);
