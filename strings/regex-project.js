// regex-projects.js
// 🧠 Practice Projects for Regex + String Mastery

console.log("🚀 Regex Projects Initialized\n");

//
// ✅ 1. Form Validator
//
function validateForm() {
  const formData = {
    email: "alice@example.com",
    phone: "(555) 123-4567",
    password: "Welcome123!"
  };

  // TODO:
  // 1. Validate email format
  // 2. Validate US-style phone number
  // 3. Validate password (min 8 chars, 1 number, 1 uppercase, 1 special char)

  // Sample output:
  // Email valid: true
  // Phone valid: true
  // Password valid: true

  console.log("\n📝 Form Validator Results:");
}

//
// ✅ 2. Log Parser
//
function parseLogs() {
  const logs = `
[2025-04-19 15:47:55] ERROR UserID: 9842 - Something went wrong
[2025-04-20 09:00:00] INFO UserID: 1203 - User logged in
[2025-04-21 10:12:33] WARN UserID: 4421 - Password expired
`;

  // TODO:
  // Use named groups to extract:
  // - date
  // - time
  // - level (ERROR, INFO, WARN)
  // - userID
  // - message

  // Sample output: Array of objects
  // [
  //   { date: '2025-04-19', time: '15:47:55', level: 'ERROR', userID: '9842', message: 'Something went wrong' },
  //   ...
  // ]

  console.log("\n📋 Parsed Logs:");
}

//
// ✅ 3. Text Highlighter
//
function highlightText(text, keywords) {
  // Example inputs:
  // const text = "Learn JavaScript, HTML, and CSS now!";
  // const keywords = ["JavaScript", "CSS"];

  // TODO:
  // 1. Create a regex that matches each keyword (case-insensitive)
  // 2. Wrap matches in <mark>...</mark>

  // Expected output:
  // "Learn <mark>JavaScript</mark>, HTML, and <mark>CSS</mark> now!"

  console.log("\n🔦 Highlighted Text:");
}

//
// ✅ 4. Basic Markdown Parser
//
function parseMarkdown(markdown) {
  // Example input:
  /*
  # Heading 1
  ## Heading 2
  This is a [link](https://example.com)
  */

  // TODO:
  // 1. Convert # and ## headings to <h1>, <h2>
  // 2. Convert [text](url) to <a href="url">text</a>

  // Expected output:
  // <h1>Heading 1</h1>
  // <h2>Heading 2</h2>
  // This is a <a href="https://example.com">link</a>

  console.log("\n📄 Parsed Markdown:");
}

//
// 🧪 Run your project functions below
//

validateForm();
parseLogs();

highlightText("Learn JavaScript, HTML, and CSS now!", ["JavaScript", "CSS"]);

parseMarkdown(`# Heading 1
## Heading 2
This is a [link](https://example.com)`);
