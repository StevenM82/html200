const sentence = 'It is pitch black. You are about to be eaten by a grue.';
console.log(sentence);

const compose = sentence.split(" ")
console.log(compose[2]);

const letUs = compose.splice(6, 5);
const fun = compose.join(' ');

const now = 'Time to go eat!';
console.log(`${fun} ${now}`);

