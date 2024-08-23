console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  let name = process.stdin.read();
  if (name !== null) {
    name = name.trim();
    console.log(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
