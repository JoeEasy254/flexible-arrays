## Create flexible collection with arrays

--- In javascript there used to be only to structures for collection of data---

<ul>
<li> Arrays </li>
<li> Objects </li>
</ul>

  <p>Now we have </p>
  <ul>
            <li> Weak Maps </li>
            <li> Maps </li>
            <li> sets </li>
            <li>weaksets </li>
            <li> Arrays </li>
            <li> Objects </li>
        </ul>

when choosing a collection, you have to ask yourself what you need to do with the information. if you need to manipulate it in any way

<ul>
<li> Add </li>
<li> sort </li>
<li> filter </li>
<li>alter all the members </li>
</ul>

<p>Array are often the best collection to use, even when you dont use an array, you'll most certainly use ideas that you'd associate with arrays. </p>

<p>Arrays are flexible because</p>
<ul>
<ol>They preserve order</ol>
<ol> you can add and remove items according to their position or determine if they have a position at all</ol>
<ol>You can sort to give an array a new order</ol>
</ul>

```js
const players = ["neymar", "messi", "ronaldo", "rooney"];
function alphabetizePlayers(team) {
  return [...players].sort();

  // ['messi', 'neymar', 'ronaldo', 'rooney']
}
```

### <b>Array methods such as map filter and reduce can alter or update the information easily with single lines</b>

example

```js
const members = [
  {
    name: "James",
    ID: "233y823y",
  },
  {
    name: "Joy",
    ID: "7347394",
  },
];

function getMember(id) {
  return members.filter((member) => member.ID == id);
}

getMember("233y823y"); // James
```

### using an array as a bridge between an object and a loop

<em>using an array as a bridge</em>

<p>Example: Transforming an object with Object.keys() and then iterate over</p>

```js
const player1 = {
  name: "fiona",
  score: 20,
  level: 2,
};

const player2 = {
  name: "bruce",
  score: 50,
  level: 1,
};

const player = Object.keys(player1);

for (let x = 0; x < player.length; x++) {
  console.log(player[x]);
}
```

<p>Array have a built in iterable.. An iterable merely a way for the code to go through a collection one item at a time knowing its current position.</p>

<!-- you can express every collection concept in the foerm of an array, which means you can easily convert from an array to a specialized collection and back again think of an object as a key value store, you can express the same concept with arrays as a key value store. as an array of arrays -->

Example

```js
const dogPair = {
  name: "Scooby",
  Color: "black",
};

//exmaple

const dogsPairs = [
  ["Scooby", "black"],
  ["coco", "brown"],
];

const getDog = (name) => {
  return dogsPairs.find((attribute) => (attribute[0] = name));
};

// This is not necessary but its good to know that an object could be an array of pairs
```

## Clear existence in array with includes()

<p> in this tip, you'll learn how to find out if a value exists in an array without checking position</p>

<em>Testing existence with javascript has always been a little clunky. for example if you to check if a string has a position in an array.
you check to see if the string has a position (position being another fearture of an iterable.) if the position exists, you'll get the index. if not you get -1. the problem id that the index can be zero, which evaluates to false also known as falsy. this means the existence can be true. but the check evaluates to false
</em>

Example

```js
const countries = ["uganda", "kenya", "malawi", "somali", "nigeria"];

function checkExistence() {
  if (countries.indexOf("uganda")) {
    return true;
  } else {
    return false;
  }
}
checkExistence();

//solution to this problem would using includes will check to see if a value exists in an array and return a Boolean of a true or false
```

## Mold arrays with the spread operator

<em>In this tip you'll see how to simplify many array action with the spread operator</em>

<p>The spread operator gives you a way to create and manipulate arrays quickly with minimal code.</p>
<p>The spread operator symbolized with three dots maybe the most widely used new fearture in javascript</p>
<p>The spread operator turns arrays into list items</p>

```js
// you start by creating an array of items

const animals = ["dog", "cat", "cow", "goat"];

//you the use the spread operator to turn it into a list
// A series that you can use in parameters or to build an array

...animals
//if you do this on a browser or a repl you'll get an error. The syntax is correcy but you cant use the spread operator on its own. you can for example assign the output to a variable, you have to spread the information into something

example

const copy = [...animals]

// to see how powerful the spread operator is.. lets start by a simple approach, removing an item from an array
function removeBook(books, removable) {
  const updated = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i] !== removable) {
      updated.push(books[i]);
    }
  }
  return updated;
}

// this is bad code and its a good rule to keep things as simple as you can.

// we can also use splice for this problem, but the problem with splice is that it mutates the original array..

function removeItem(books, removable) {
  const index = books.indexOf(removable);
  books.splice(index, 1);
  return books;
}
const books = ['simplifying javascript', 'rediscovering javascript', 'Jquery from the beginning'];
const recent = removeItem(books, 'simplifying javascript');
const novels = removeItem(books, 'rediscovering javascript');


// Notice in this case that you’re even assigning books with const. You
// may assume this won’t be mutated, but that isn’t always the case.



```

<hr>
<p>Array also have have a method called slice(). which returns a part of an array without changing the original array, when you are using slice you pass the starting point and an endpoint, and you get everything in between. Alternatively you can pass just a startpoint and get everything from that point until the end of an array. then you can use concat to put the pieces of the array back together.</p>

```js
const players = ["messi", "ronaldo", "neymar", "rooney", "bale"];

function removePlayer(players, player) {
  // get the position where the player is inside the array
  const removeIndex = players.indexOf(player);

  return players.slice(0, removeIndex).concat(players.slice(removeIndex + 1));
}

const result = removePlayer(players, "neymar");
console.log(result);

//The code is great.. now we are getting a new array without changing the original array and you avoid alot of code.However it isnt clear what is getting returned. Another developer would need to know that concat joins two arrays into a single flat array. There is no visual clue of what you're doing.
```

<p>This is where the spread operator comes in. combined with a slice, the spread operator turns both sub arrays into a list thats placed back into square brackets. it actually looks like an array and gives you a smaller array without affecting the larger array<p>

```js
function removeItem(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

// Notice a few things about this code.  There are no mutations. It’s easy to read.
// It’s simple. It’s reusable.
```

<p>The spread operator also lets you pull out the items of an array with the few characters</p>

```js
const arr = ["joseph", 24, "male"];

function getValues(name, age, gender) {
  return `${name} ${age} ${gender}`;
}
getValues(arr[0], arr[1], arr[2]);
// instead of doing this, you can also use the spread operator to spread the values as arguments in the function call

// solution
getValues(...arr);
```

## Avoid push mutation with the spread operator

<p> avoiding array mutation by creating new arrays with the spread operator </p>

```js
const cart = [
  {
    id: 1,
    item: "shoe",
    price: 1200,
  },
  {
    id: 2,
    item: "shirt",
    price: 200,
  },

  {
    id: 3,
    item: "trouser",
    price: 900,
  },
];

function addRewardToCart(reward) {
  const total = cart.reduce(function (accumulator, current) {
    return accumulator + current.price;
  }, 0);

  if (total >= 1500) {
    return [...cart, reward];
  }
  return cart;
}
const reward = {
  reward: "2 hoodies and shirt",
};

const newReward = addRewardToCart(reward);

console.log(newReward);
```

<em>we can also add items to the beginning and end of an array using the spread operator </em>

```js
const cart = [
  {
    id: 1,
    item: "shoe",
    price: 1200,
  },
  {
    id: 2,
    item: "shirt",
    price: 200,
  },

  {
    id: 3,
    item: "trouser",
    price: 900,
  },
];

// more with spread
const newCart = [
  ...cart,
  {
    id: 2,
    item: "shirt",
    price: 200,
  },

  {
    id: 3,
    item: "trouser",
    price: 900,
  },
];
```
