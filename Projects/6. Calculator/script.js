// Get reference to the input box (where numbers/results will be displayed)
let input = document.getElementById('inputBox');

// Get all the button elements in the calculator
let buttons = document.querySelectorAll('button');

// String will hold the expression entered by the user (like "12+3")
let string = "";

// Convert NodeList of buttons into an array for easy iteration
let arr = Array.from(buttons);

// Loop through each button and attach a click event listener
arr.forEach(button => {
    button.addEventListener('click', (e) => {

        // Case 1: If user presses '=' button → evaluate the expression
        if (e.target.innerHTML == '=') {
            // ⚠️ eval() directly executes the string as JavaScript
            // Example: "2+3*4" → eval → 14
            // Not safe for real-world apps (use parser or Function() instead)
            string = eval(string);
            input.value = string; // Show result in input box
        }

        // Case 2: If user presses 'AC' button → clear everything
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string; // Empty display
        }

        // Case 3: If user presses 'DEL' button → remove last character
        else if (e.target.innerHTML == 'DEL') {
            // Substring cuts off the last character
            string = string.substring(0, string.length - 1);
            input.value = string; // Update display
        }

        // Case 4: For all other buttons (numbers/operators)
        else {
            // Add the button’s text (like "1", "5", "+", etc.) to the expression
            string += e.target.innerHTML;
            input.value = string; // Update display with current expression
        }
    })
})
