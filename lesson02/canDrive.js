const firstName = 'Joey';
const lastName = 'Doughnuts';
const name =`${firstName} ${lastName}`;
let age = 32;
let driveAge = 16;

if (age > driveAge) {
  console.log(`The current driving minimum age is ${driveAge}`);
  console.log(`${name}, you have been allowed to drive for ${age - driveAge} years`);
}
else {
  for ( i = 5; i >= 0; i-- ) {
    console.log(i);
  }
  console.log('Not quite old enough yet')
}