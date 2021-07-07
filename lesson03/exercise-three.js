let morePractice = ['No', 'learns', 'get', 'times better', 'now.'];
console.log(morePractice);

morePractice.forEach(function(learning) {
  let practice = morePractice.indexOf(learning);
  let more = `${practice}, ${learning}`;
  console.log(more);
})