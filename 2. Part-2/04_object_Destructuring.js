/**************************************************
 * PART 1: Object Destructuring
 **************************************************/
const course = {
    courseName: "Js in Hindi",
    coursePrice: "999",
    courseInstructor: "Hitesh Chaudhary"
};

// ✅ Correct destructuring with rename
const { courseInstructor: instructor } = course;
console.log(instructor); // "Hitesh Chaudhary"


/**************************************************
 * PART 2: Function Parameter Destructuring
 **************************************************/
const navbar = ({ company }) => {
    console.log(`Welcome from ${company}`);
};

// ✅ Must pass object with key 'company'
navbar({ company: "Hitesh" });


/**************************************************
 * PART 3: JSON & APIs (intro)
 **************************************************/
// JSON looks like JS object but with string keys
// Example JSON data (like from an API):
// {
//   "id": 1,
//   "title": "Learn JavaScript",
//   "price": 500
// }

// Example API call (fetch data in JSON)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // convert response to JSON
  .then(data => console.log("API Data:", data));
