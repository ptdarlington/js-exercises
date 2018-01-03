// in iTerm, run:
// `cd ~/Desktop/js-expercises`
// `node fizzBuzz.js`

for(let i = 1; i <= 100; i += 1) {
  if(i % 3 === 0) {
    console.log('Fizz');
  }

  if(i % 5 === 0) {
    console.log('Buzz');
  }

  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}
