/********************************************************************
 * REAL-LIFE STRING PROBLEMS
 ********************************************************************/

console.log("\n******** Real-Life String Problems ********");

// 1. Capitalize first letter of each word
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

let str1 = "hello world from javascript";
console.log("Capitalize Words:", capitalizeWords(str1));  
// Output: "Hello World From Javascript"


// 2. Check if a string is a palindrome
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove spaces & symbols
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
console.log("Is 'JavaScript' a palindrome?", isPalindrome("JavaScript")); // false


// 3. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'Amit':", reverseString("Amit")); // timA


// 4. Count vowels in a string
function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels in 'Jangid':", countVowels("Jangid")); // 2


// 5. Find the longest word in a sentence
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log("Longest word:", longestWord("JavaScript is very powerful language")); 
// powerful


// 6. Mask sensitive info (e.g., hiding part of email)
function maskEmail(email) {
    let [user, domain] = email.split("@");
    let hidden = user[0] + "***" + user.slice(-1);
    return hidden + "@" + domain;
}
console.log("Masked Email:", maskEmail("amitjangid302022@gmail.com")); 
// a***2@gmail.com
