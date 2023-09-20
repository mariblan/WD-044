//OBJECT literals

const user = {
  name: 'Maria',
  age: 27,
  favouriteFood: 'Pizza',
  address: {
    street: 'Calle de la piruleta',
    number: 3,
    city: 'Madrid',
  },
  isStudent: true,
  hobbies: ['read', 'dance', 'travel'],
};

console.log(user);
// Dot notation use to reach objects properties
console.log(user.name);
console.log(user.address.city);

// //Vaiable not defined as it isn't initialized or reachable.
// // console.log(myFirstArray);
// //
console.log(user.hobbies);

// // Nnaemeka
console.log(user.hobbies[0]);

// //Bishal

console.log(user.address.street);

// // nawfal

console.log(user.address.number);

// // pia
console.log(user.hobbies[2]);

// //Denis
console.log(
  user.address.street + ' ' + user.address.number + ' ' + user.hobbies[2]
);
console.log(user.address.street, user.address.number, user.hobbies[2]);
console.log(`${user.address.street} ${user.address.number} ${user.hobbies[2]}`);

// //Maziar
console.log(user.address.street, user.address.number, user.address.city);
