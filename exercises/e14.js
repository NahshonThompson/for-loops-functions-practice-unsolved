
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
   let wrongAccounts = [];

   for (let bankAccounts of array) {
    const deposits = bankAccounts.deposits || [];
    const withdrawals = bankAccounts.withdrawals || [];
    
    const depositTotal = deposits.reduce((sum, amount) => sum + amount, 0);
    const withdrawalTotal = withdrawals.reduce((sum, amount) => sum + amount, 0);

    const calculatedBalance = depositTotal - withdrawalTotal;

    if (bankAccounts.balance !== calculatedBalance) {
      wrongAccounts.push(bankAccounts)
    }  
   } 
   return wrongAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
