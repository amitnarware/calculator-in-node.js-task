const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

console.log('Welcome! Enter a calculation, I\'ll give you the answer.');

// Function to perform the calculation
function calculate(expression) {
  const parts = expression.split(' ');

  if (parts.length !== 3) {
    return 'Invalid expression. Please enter a valid arithmetic expression.';
  }

  const [num1, operator, num2] = parts;

  switch (operator) {
    case '+':
      return Number(num1) + Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '*':
    case 'x':
      return Number(num1) * Number(num2);
    case '/':
      return Number(num1) / Number(num2);
    default:
      return 'Invalid operator. Please enter a valid arithmetic operator.';
  }
}

// Handle user input
rl.prompt();

rl.on('line', (line) => {
  if (line === 'exit') {
    console.log('Goodbye!');
    rl.close();
  } else {
    const result = calculate(line);
    console.log('= ' + result);
    rl.prompt();
  }
});

rl.on('close', () => {
  process.exit(0);
});
