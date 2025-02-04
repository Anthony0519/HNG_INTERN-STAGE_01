# NUMBER CLASSIFICATION API
- The Number Classification API is a RESTful service that accepts an integer as input and returns a JSON response with some mathematical properties of the number along with a fun fact

## Technologies Used
- Node.js
- Express.js
- JavaScript
- CORS
- dotenv
- nodemon

## Installation and Setup
1. Clone the repository:
  - git clone https://github.com/Anthony0519/HNG_INTERN-STAGE_01 .git
2. Install dependencies:
  - npm install
3. Run the server:
  - npm run dev
4. Environmet variables:
  - create a .env file and setup the content on .env.example with your detail on the file

## DOCUMENTATION
1. ENDPOINT: GET
    - 
2. SUCCESS RESPONSE FORMAT:
    - {
    "number": 10,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "Even"
    ],
    "digit_sum": 1,
    "fun_fact": "10 is the base of our number system."
    }
3. ERROR RESPONSE FORMAT:
    - {
    "number": "alphabet or special character",
    "error": true
    }

## HNG_backlink
  - https://hng.tech/hire/nodejs-developers