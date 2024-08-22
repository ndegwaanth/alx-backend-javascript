function calculateNumber (type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return num1 + num2;
    case 'SUBTRACT':
      return num1 - num2;
    case 'DIVIDE':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
