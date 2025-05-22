const std = require('process');

std.stdout.write("Welcome to Holberton School, what is your name ?\n");

std.stdin.on('readable', () => {
  const inputUser = std.stdin.read();
  if (inputUser) {
    std.stdout.write(inputUser);
  }
  std.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
});
