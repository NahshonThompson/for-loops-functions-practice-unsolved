
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  const result = [];
  let found = false;
  let maxBalance = 0;

  for (let i = 0; i < array.length; i++) {
    const balance = array[i].balance;
    if (!found) {
      maxBalance = balance;
      found = true;
    } else if (balance > maxBalance) {
      maxBalance = balance;
    }
  }

  if (!found) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].balance === maxBalance) {
      result.push(array[i]);
      break;
    }
  }

  return result;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
