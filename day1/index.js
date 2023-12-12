console.log('Day 1');

const filename = 'input.txt';

const fs = require('node:fs');
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  let fileSum = 0;

  lines.forEach((line) => {
    const regex = /\d+/g;
    const lineDigits = line.match(regex).join('');

    const firstNumber = lineDigits[0];

    let secondNumber = '';
    if (lineDigits.length > 1) {
        secondNumber = lineDigits[lineDigits.length - 1];
    } else {
        secondNumber = firstNumber;
    }

    const lineTotal = parseInt(firstNumber + secondNumber);
    fileSum += parseInt(lineTotal);
  });

  console.log('Result:', fileSum);
});