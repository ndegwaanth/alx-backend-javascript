console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input) {
  const name = input.trim();
  console.log(`Your name is: ${name}`);

  process.stdin.end();
});

process.stdin.on('end', function () {
  console.log('This important software is now closing');
});
