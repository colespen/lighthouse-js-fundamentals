/*
const umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
  close: () => {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!"
    }
  }
};
console.log(umbrella.close());
*/
/*
const breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingerdients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
 }
*/

//        Bank Accounts
/*
const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: (amount) => {
    if (amount > 0) {
      savingsAccount.balance += amount;
      return `Your new balance is $${savingsAccount.balance}`
    }
  },
  withdraw: (amount) => {
    const verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
      return `Your new balance is $${savingsAccount.balance}`
    } else {
      return "Insufficient funds."
    }
  },
  printAccountSummary: () => {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};
console.log(savingsAccount.deposit(800));
*/

//        FB Friends
/*
const facebookProfile = {
  name: "FatSlabb",
  friends: 12000,
  messages: ["So easily do weak men put in high positions turn villains", "sing, sing up everything, sing and destroy!", "But what is to be done?", "What can be broken, should be broken", "hey, sup."],
  postMessage: (message) => {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: (index) => {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: () => {
    return facebookProfile.friends++;
  },
  removeFriend: () => {
    return facebookProfile.friends--;
  }
}
console.log(facebookProfile.postMessage("kew"));
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.addFriend());
console.log(facebookProfile);
*/

/*
//        Donuts Revisited
let donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(el => {
  console.log(`${el.type} donuts cost $${el.cost} each.`);
});
*/