const std = require('process');

std.stdout.write('Welcome to Holberton School, what is your name?\n');

std.stdin.on('readable', () => {
  const name = std.stdin.read();
  if (name) {
    std.stdout.write(`Your name is: ${name}`);
  }
  std.exit();
});
std.on('exit', () => {
  std.stdout.write('This important software is now closing\n');
});
