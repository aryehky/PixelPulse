

//write a hash map of 10 people names and how much money they have

let people = {
    "John": 1,
    "Bob": 2,
    "Mary": 3,
    "Jane": 4,
    "Jack": 5,
    "Tom": 6,
    "Sam": 7,
    "Linda": 8,
    "Sara": 9,
    "Mike": 10
}

let raffle = [];

//for each item in people enter their name in a raffle as many times as their value by pushing their name into the raffle array x times

for (let i = 0; i < Object.keys(people).length; i++) {
    for (let j = 0; j < people[Object.keys(people)[i]]; j++) {
    raffle.push(Object.keys(people)[i]);
    }
}


let winner = raffle[Math.floor(Math.random() * raffle.length-1)];

console.log(`The winner is ${winner}`);


