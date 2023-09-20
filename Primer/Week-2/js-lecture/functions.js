//FUNCTIONS
//ES5
const classA = ['Nawfal', 'Sarah', 'Bishal', 'Xheni'];
const teacherA = 'Besslan';
const classB = ['Maria', 'Luisa', 'Ana'];
const teacherB = 'Jorge';

//Parameters are used in the declaration of the function and are like placeholders
// so they have no value.
function greet(whoops, teacher) {
  if (typeof whoops !== 'object') {
    console.log('You need to enter an array!');
    return 'You need to enter an array!';
  } else {
    let i = -1;
    const greeting = [];
    do {
      i += 1;
      greeting.push(`Hi ${whoops[i]}!`);
    } while (i < whoops.length - 1);
    greeting.push(teacher);
    console.log(greeting);
    return greeting;
  }
}
// arguments are used when calling the function and they give a value in the
// place where we have the parameters.
greet(teacherA, classA);
greet(classB, teacherB);

const greetings = (batch, teacher) => {
  if (typeof batch !== 'object') {
    console.log('You need to enter an array!');
    return 'You need to enter an array!';
  } else {
    let i = -1;
    const greeting = [];
    do {
      i += 1;
      greeting.push(`Hi ${batch[i]}!`);
    } while (i < batch.length - 1);
    greeting.push(teacher);
    console.log(greeting);
    return greeting;
  }
};

greetings(classA, teacherA);

// export { greetings, greet, classA, classB, teacherA, teacherB };
