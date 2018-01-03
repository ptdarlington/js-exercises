// in iTerm, run:
// `cd ~/Desktop/js-expercises`
// `node fizzBuzz.js`

for(let i = 1; i <= 100; i += 1) {
  let output = '';

  if(i % 3 === 0) output += 'Fizz';
  if(i % 5 === 0) output += 'Butt';

  console.log(output || i);
}
