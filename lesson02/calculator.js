let x = 0;
let y = x * 2;
let z; 
const buy = 'Checkout';

do {
  x++;
  y += x;
  z = (x * y);
  console.log(x, y, z);
} while (y <= 6);

console.log(buy + ' ' + 'ready?');

if (x >= 4) {
  let total = z;
  console.log('Current total:' + ' ' + total);
}

