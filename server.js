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

