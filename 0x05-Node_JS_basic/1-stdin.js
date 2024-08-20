process.stdin.write('Welcome to Holberton School, what is your name? \n');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data) {
  const infor = data.trim();
  console.log(`Your name is: ${infor}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing \n');
});
