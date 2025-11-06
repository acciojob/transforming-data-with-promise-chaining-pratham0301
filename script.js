// Select elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Helper function that returns a Promise with a delay
function delayedOperation(delay, operation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(operation());
    }, delay);
  });
}

// Button click event listener
button.addEventListener('click', () => {
  const value = Number(input.value);

  if (isNaN(value)) {
    output.textContent = "Please enter a valid number!";
    return;
  }

  output.textContent = ""; // Clear previous result

  // Promise chain begins
  delayedOperation(2000, () => {
    output.textContent = `Result: ${value}`;
    return value;
  })
    .then((num) => delayedOperation(2000, () => {
      const result = num * 2;
      output.textContent = `Result: ${result}`;
      return result;
    }))
    .then((num) => delayedOperation(1000, () => {
      const result = num - 3;
      output.textContent = `Result: ${result}`;
      return result;
    }))
    .then((num) => delayedOperation(1000, () => {
      const result = num / 2;
      output.textContent = `Result: ${result}`;
      return result;
    }))
    .then((num) => delayedOperation(1000, () => {
      const result = num + 10;
      output.textContent = `Final Result: ${result}`;
      return result;
    }));
});