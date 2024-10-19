// const arr = ["joseph", "sara", "paul", "mary"];

// // adding to the end
// const length = arr.push("traversy");

// // remove at the end
// arr.pop();

// // add the beginning
// arr.unshift("traversy");

// // removing at the beginning
// arr.shift();

// console.log(arr);

// sorting using arrays
// const players = ["neymar", "messi", "ronaldo", "rooney"];

// function alphabetizePlayers() {
//   return [...players].sort();
// }

// const sortedPlayers = alphabetizePlayers();

// console.log(sortedPlayers);

// Array method such as filter and reduce can alter the information easily

// const members = [
//   {
//     ID: "738479f70f",
//     name: "James",
//   },
//   {
//     ID: "FSD80F8SD0",
//     name: "joy",
//   },
// ];

// function getMember(id) {
//   return members.filter((member) => member.ID === id);
// }

// const member = getMember("738479f70f");

// console.log(member);

// using an array as a bridge between an object and a loop

// Example: Transform an object with Object.keys();

// const player1 = {
//   name: "bruce",
//   score: 20,
//   level: 2,
// };

// const player2 = {
//   name: "doreen",
//   score: 50,
//   level: 1,
// };

// const player = Object.keys(player1);

// for (let x = 0; x < player.length; x++) {
//   console.log(player[x]);
// }

// Arrays have a built iterable, which is just a way for the code to go through a collection one item at a time knowing its current position

// const dogPair = {
//   name: "Scooby",
//   Color: "black",
// };

// const dogPairs = [
//   ["scooby", "black"],
//   ["coco", "brown"],
// ];

// const getDogColor = (name) => {
//   return dogPairs.find((attribute) => attribute[0] == name)[1];
// };

// const dogColor = getDogColor("coco");

// console.log(dogColor);

// Clear existence in array with includes,
// how we can out if a value exists in an array without checking position

// const countries = ["uganda", "kenya", "malawi", "somali", "nigeria"];

// function checkExistence() {
//   if (countries.includes("uganda")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const returnedVal = checkExistence();

// console.log(returnedVal);

// Mold arrays with the spread operator

// const animals = ["dog", "cat", "cow", "goat"];

// const newAnimals = [...animals];

// console.log(newAnimals);

// function removeBook(books, removable) {
//   const updated = [];

//   for (let i = 0; i < books.length; i++) {
//     if (books[i] !== removable) {
//       updated.push(books[i]);
//     }
//   }

//   return updated;
// }

// function removeItem(books, removable) {
//   const index = books.indexOf(removable);

//   books.splice(index, 1);

//   return books;
// }
// const books = [
//   "simplifying javascript",
//   "rediscovering javascript",
//   "Jquery from the beginning",
// ];

// const newBooks = removeItem(books, "rediscovering javascript");

// console.log(newBooks);
// console.log("books", books);

// using slice as the solution -> it does not mutate the original array which is a good thing.

// const players = ["messi", "ronaldo", "neymar", "rooney", "bale"];

// function removePlayer(players, player) {
//   // get the position where the player is inside the array
//   const removeIndex = players.indexOf(player);
//   console.log(players.slice(0, removeIndex));
//   return players.slice(0, removeIndex).concat(player.slice(removeIndex + 1));
// }

// removePlayer(players, "ronaldo");

// function removeItem(items, removable) {
//   const index = items.indexOf(removable);

//   return [...items.slice(0, index), ...items.slice(index + 1)];
// }

// const newArr = removeItem(players, "ronaldo");

// console.log("new Array", newArr);

// The spread operator also lets you pull items of an array with few characters

// const arr = ["joseph", 24, "male"];

// function getValues(name, age, gender) {
//   return `${name} ${age} ${gender}
//     `;
// }

// getValues(arr[0], arr[1], arr[2]);

// getValues(...arr);

// Avoid push mutation with the spread operator

// const cart = [
//   {
//     id: 1,
//     item: "shoe",
//     price: 1200,
//   },
//   {
//     id: 2,
//     item: "shirt",
//     price: 400,
//   },
//   {
//     id: 3,
//     item: "trouser",
//     price: 900,
//   },
// ];

// function addRewardToCart(reward) {
//   const totalItems = cart.reduce(function (accumulator, current) {
//     return accumulator + current.price;
//   }, 0);

//   if (totalItems >= 1200) {
//     return [...cart, reward];
//   }
//   return cart;
// }

// const reward = {
//   reward: "2 hoodies and shirt",
// };

// const newReward = addRewardToCart(reward);

// console.log("reward", newReward);
