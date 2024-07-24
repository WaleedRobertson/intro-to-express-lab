// 1. Be Polite, Greet the User

// Task: Create a route that responds to URLs like /greetings/<username-parameter>.
// Examples: Matches routes like /greetings/Christy or /greetings/Mathilda.
// Response: Include the username from the URL in the response, such as “Hello there, Christy!” or 
// “What a delight it is to see you once more, Mathilda.”
// Import Express
import express from "express";
// Create an Express app
const app = express()
const PORT = 3000;

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.get('/greetings/:name', (req, res) => {
  /*chatGpt generated the "req.params.name"; req.params is a property
  of req */
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// // 2. Rolling the Dice
// // Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.

// // Examples: Matches routes like /roll/6 or /roll/20.

// // Validation: If the parameter is not a number, respond with “You must specify a number.” 
// // For instance, /roll/potato should trigger this response.

// // Functionality: If a valid number is provided, respond with a random whole number 
// // between 0 and the given number. For example, a request to /roll/16 might respond with 
// “You rolled a 14.”

app.get('/roll/:number', (req, res) => {
  const number = req.params.number;
 //isNaN generated with the help of chatGPT 
  if (isNaN(`${number}`)) {
    res.send('choose a number');} 
  else {
    res.send(`'You rolled ${number}'`)
  }
})

// 3. I Want THAT One!
// Task: Create a route for URLs like /collectibles/<index-parameter>.
// Examples: Matches routes such as /collectibles/2 or /collectibles/0.
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index;
  if (req.params.index > 2 ) {
res.send ('This item is not yet in stock. Check back soon!')
  }

  else {res.send(`'"So you want the ${collectibles[index].name} for ${collectibles[index].price} it's yours!" '`)};
});

// 4. Filter Shoes by Query Parameters
// Use the following array of shoes in this challenge:
// Task: Create a route /shoes that filters the list of shoes based on query parameters.
// Query Parameters:
// min-price: Excludes shoes below this price.
// max-price: Excludes shoes above this price.
// type: Shows only shoes of the specified type.
// No parameters: Responds with the full list of shoes.

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


