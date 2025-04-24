// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let clients = [];
  for(var i = 0; i < array.length; i++) {
    var clientLetters = [];
    var hasTheLetters = false;
    for(let x in array[i].name) {
      clientLetters.push(array[i].name[x].toLowerCase());
    }
    for(let y = 0; y < clientLetters.length; y++) {
      if(clientLetters[y] == letter) {
        var hasTheLetters = true;
      }
    }
    if (hasTheLetters) {
      clients.push(array[i].name);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
