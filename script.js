let input = document.getElementById('inputBox');
let string = "";

// Function to update the input box based on button clicks
function buttonClick(value) {
    if (value === '=') {
        try {
             
            
            string = new Function('return ' + string)();
            input.value = string;
        } catch (error) {
            // Handle potential errors when evaluating the expression
            input.value = 'Error';
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        // Remove the last character only if the string is not empty
        if (string.length > 0) {
            string = string.slice(0, -1);
            input.value = string;
        }
    } else {
        // Allow adding only one operator at a time
        const lastChar = string.slice(-1);
        if (!isOperator(lastChar) || !isOperator(value)) {
            string += value;
            input.value = string;
        }
    }
}

// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Event listener for keyboard inputs
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9' || key === '.' || isOperator(key)) {
        buttonClick(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        string = "";
        input.value = string;
    } else if (key === 'Backspace') {
        // If Backspace is pressed, remove the last character from the input string and update the input box
        if (string.length > 0) {
            string = string.slice(0, -1);
            input.value = string;
        }
    }
});

// Function to calculate the result
function calculate() {
    try {
        string = new Function('return ' + string)();
        input.value = string;
    } catch (error) {
        input.value = 'Error';
    }
}
