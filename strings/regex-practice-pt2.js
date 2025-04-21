// regex-challenges.js
// Practice regex + string method exercises (easy → advanced)

// 🚦 Instructions:
// 1. Try solving each function yourself
// 2. Write clean, readable regex
// 3. Add comments to explain your regex
// 4. Use console.log() to test each challenge

console.log("🔍 Regex Practice Starting...\n");

//
// 🟢 EASY LEVEL
//

// 1. Extract all words from a sentence
function extractWords() {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  // TODO: Use regex to extract all words
}

// 2. Extract all digits from a string
function extractDigits() {
  const input = "Order #1234, Tracking ID: 987654";
  // TODO: Get all digit sequences like ['1234', '987654']
}

// 3. Replace all spaces with dashes (slugify)
function slugify() {
  const title = "Learn Regex in JavaScript";
  // TODO: Output: "learn-regex-in-javascript"
}

// 4. Check if a string contains the word "error" (case-insensitive)
function containsError() {
  const log = "System threw an ERROR at line 32";
  // TODO: Use test() or search()
}

// 5. Match all hashtags in a tweet
function findHashtags() {
  const tweet = "New launch today! #product #excited #JavaScript";
  // TODO: Use match() or matchAll()
}

//
// 🟡 INTERMEDIATE LEVEL
//

// 6. Extract email username and domain using named groups
function extractEmailParts() {
  const input = "Contact me at alice@example.com and bob@company.org";
  // TODO: Use matchAll() with named groups
}

// 7. Match and extract all valid US phone numbers
function extractPhoneNumbers() {
  const contacts = "Call (555) 123-4567 or (212) 987-6543";
  // TODO: Capture area code and number
}

// 8. Convert snake_case to camelCase
function convertToCamelCase() {
  const input = "this_is_a_test_string";
  // TODO: Use replace() with a function
}

// 9. Validate a simple password (min 6 chars, at least 1 number)
function validatePassword() {
  const password = "abc123";
  // TODO: Return true/false
}

// 10. Replace only the first instance of "lorem" in a string
function replaceFirstLorem() {
  const paragraph = "lorem ipsum dolor lorem ipsum";
  // TODO: Use regex to replace only the first one
}

//
// 🔴 ADVANCED LEVEL
//

// 11. Extract date and time from a log (YYYY-MM-DD HH:MM:SS)
function extractDateTime() {
  const log = "2025-04-19 14:32:12 — user logged in";
  // TODO: Capture date and time separately
}

// 12. Match all quoted strings ('...' or "...")
function matchQuotedStrings() {
  const input = `He said, "hello", then 'bye'.`;
  // TODO: Match both types of quotes
}

// 13. Match only words ending in "ing"
function matchIngWords() {
  const text = "playing swimming sitting went gone";
  // TODO: Match only the "ing" words
}

// 14. Match number only if followed by "kg"
function matchWeight() {
  const input = "Apples: 10kg, Water: 2L, Bananas: 5kg";
  // TODO: Match only numbers followed by "kg"
}

// 15. Extract values from "key=value" format using named groups
function extractKeyValuePairs() {
  const config = "env=production debug=false version=1.2.3";
  // TODO: Extract each key and value pair
}

//
// 🧪 FUNCTION PRACTICE: Extract, Validate, Transform
//

// 16. Validate an email address format
function validateEmail(email) {
  // TODO: Return true/false
}

// 17. Extract all URLs from a block of HTML
function extractURLs() {
  const html = '<a href="https://site.com">Link</a> <a href="https://test.com">Test</a>';
  // TODO: Match all href values
}

// 18. Capitalize every word in a sentence using replace()
function capitalizeWords() {
  const sentence = "welcome to the jungle";
  // TODO: Use replace with a function
}

// 19. Extract all hex color codes from CSS
function extractHexColors() {
  const css = "color: #fff; background: #a1b2c3; border: #000000;";
  // TODO: Match all hex codes
}

// 20. Convert a markdown-style heading (# Title) to an <h1> tag
function convertMarkdownHeading() {
  const heading = "# Welcome to My Site";
  // TODO: Transform to "<h1>Welcome to My Site</h1>"
}

//
// 🧠 Meta Exercise: Explain your Regex
// Add a comment inside any of the above functions explaining:
// - What your regex does
// - Why each part is necessary
// - Which method you used and why (match vs matchAll vs exec vs test)
//

//
// 🧪 Bonus: Compare match() vs matchAll()
// Use a case with capture groups + global flag
//
function compareMatchVsMatchAll() {
  const input = "Name: Alice, Age: 30; Name: Bob, Age: 25;";
  const regex = /Name: (\w+), Age: (\d+)/g;

  const matchResult = input.match(regex);
  console.log("match():", matchResult);

  const matchAllResult = input.matchAll(regex);
  for (const m of matchAllResult) {
    console.log(`Name: ${m[1]}, Age: ${m[2]}`);
  }
}

//
// ✅ Run this to test each one manually:
extractWords();
// extractDigits();
// extractEmailParts();
// extractPhoneNumbers();
// ...
