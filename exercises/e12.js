
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]


export function getAllDepositsGreaterThanOneHundred(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const deposits = array[i].deposits;
    if (deposits && deposits.length > 0) {
      for (let j = 0; j < deposits.length; j++) {
        if (deposits[j] > 100) {
          result.push(deposits[j]);
        }
      }
    }
  }

  return result;
}
                        


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
