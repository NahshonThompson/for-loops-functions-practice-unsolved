// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  const result = [];
  let found = false;
  let minBalance = 0;

  for (let i = 0; i < array.length; i++) {
    const balance = array[i].balance;
    if (balance > 0) {
      if (!found) {
        minBalance = balance;
        found = true;
      } else if (balance < minBalance) {
        minBalance = balance;
      }
    }
  }

  if (!found) {
    return result;
  }

  
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance === minBalance) {
      result.push(array[i]);
      break;
    }
  }

  return result;
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function