//LOOPS

const ourClass = ['Nawfal', 'Sarah', 'Bishal', 'Xheni'];
console.log(ourClass.length)

// for loop
  for(let i = 0; i < ourClass.length; i+=1) {
    console.log(`Hi ${ourClass[i]}`)
  }

  // while loop 
  let n = 0;
  
  while(n < ourClass.length) {
    console.log(`Hi ${ourClass[n]}`)
    n++
  }

let i = -1;
let myNum = '';
    do {
        i += 1
        myNum += i
    } while(i > 5);

console.log(myNum);

// Array method loops.

ourClass.forEach((student) => console.log(student))
ourClass.map((item) => console.log(item))