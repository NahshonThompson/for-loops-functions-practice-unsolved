
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

export function doesArrayInclude(array, value) {
  let clients = [];
  for(var i = 0; i < array.length; i++) {
    var clientLetters = [];
    var hasTheLetters = false;
      clientLetters.push(array[i].toLowerCase());
    
    for(let y = 0; y < clientLetters.length; y++) {
      if(clientLetters[y] == value) {
        var hasTheLetters = true;
      }
    }
    if (hasTheLetters) {
      clients.push(array[i]);
    }
  }
  return hasTheLetters

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
