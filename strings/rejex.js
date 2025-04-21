// Exercise 1: Extracting Hashtags from a Tweet
const tweet = "Loving the weather today! #sunny #weekendvibes #outdoorfun";

//Exercise 2: Find Phone Numbers
const text =
  "Call us at (555) 123-4567 or (555) 987-6543 for more information.";

//Exercise 3: Extract Date and Time
const log =
  "2025-04-19 14:32:12, user logged in\n2025-04-19 15:47:55, user logged out\n2025-04-20 09:00:00, user logged in";

//Exercise 4: Extracting Email Addresses
const emails = "alice@example.com, bob@company.org, charlie@website.net";

// Exercise 5: Extracting Prices from a Product List

const products = "Apple: $1.99, Banana: $0.89, Orange: $2.49, Mango: $3.69";

//Challenge Bonus: Combination Exercise
// You're given a string containing a mix of dates, phone numbers, and hashtags. 
// Your task is to extract and categorize them.

const mixedText = "Meeting on 2025-04-19 14:30:00, call me at (555) 123-4567, and check out #ProductLaunch";


//
// Exercise 6: Named Capturing Groups (Unsolved)
//
function extractNamesAndAges() {
  const str = "name: Alice, age: 30, name: Bob, age: 25";

  // TODO:
  // 1. Write a regex that uses named capture groups: `name` and `age`
  // 2. Use matchAll() to loop through the matches
  // 3. Log each name and age like this:
  //    "Name: Alice, Age: 30"
  //    "Name: Bob, Age: 25"

  console.log("\nExercise 6: Named Capturing Groups");
  const regex = /.../g; // <-- fill in the regex here

  const matches = str.matchAll(regex);
  for (const match of matches) {
    // console.log(`Name: ${match.groups.name}, Age: ${match.groups.age}`);
  }
}

