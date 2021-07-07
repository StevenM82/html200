let animals = ['cats', 'dogs', 'mice', 'bears', 'lions'];

console.log(animals);

animals.push('cubs');
console.log(animals);

animals.splice(2, 1);
console.log(animals);

const animalsHere = animals.join(', '); {
  console.log(animalsHere);
}