/*Box1*/
function displayValues() {
    // 1. Declare a variable using let and assign your name
    let myName = document.getElementById("name").value;

    // 2. Create a number variable and add 10 to it
    let myNumber = parseInt(document.getElementById("number").value) + 10;

    // 3. Define a Boolean variable with a true value
    let isStudent = true;

    // 4. Print all values using console.log()
    console.log("My Name:", myName);
    console.log("My Number:", myNumber);
    console.log("Boolean Value:", isStudent);

    // Display the values on the webpage
    document.getElementById("output1").innerHTML = `
        <p>My Name: ${myName}</p>
        <p>My Number: ${myNumber}</p>
        <p>Boolean Value: ${isStudent}</p>
    `;
}

/*Box2*/

function performOperations() {
    let a = 8;
    let b = 3;

    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = a / b;
    let modulus = a % b;

    let isGreater = a > b;
    let logicalCheck = (a > 5 && b < 10);

    let outputText = `
        <strong>Results:</strong><br>
        Addition (a + b) = ${addition} <br>
        Subtraction (a - b) = ${subtraction} <br>
        Multiplication (a * b) = ${multiplication} <br>
        Division (a / b) = ${division} <br>
        Modulus (a % b) = ${modulus} <br><br>
        Is 'a' greater than 'b'? ${isGreater} <br>
        Logical AND (a > 5 && b < 10): ${logicalCheck}
    `;

    document.getElementById("output2").innerHTML = outputText;
}

/*Box3*/
function displayProfile() {
    let name = document.getElementById("name1").value;
    let age = parseInt(document.getElementById("age1").value);
    let student = document.getElementById("isStudent").value;

    document.getElementById("output3").innerHTML = `
    <p>My Name:${name}</p>
    <p>My Age:${age}</p>
    <p>Student:${student}</p>
    `;
}


/*Box4*/
function generateTable() {
    let num = parseInt(document.getElementById("num1").value);
    let result = `<p>The table of ${num} is<br>`;
    for (let i = 1; i <= 10; i++) {
        result += `${num}X${i}=${num * i}<br>`
    }

    document.getElementById("output4").innerHTML = result;
}

/*Box5*/

function checkEvenOdd() {
    let num = parseInt(document.getElementById("number2").value);
    let ans = num % 2 != 0 ? "ODD" : "Even";
    document.getElementById("output5").innerHTML = `<p>The number is:${ans}</p>`;
}

function printNumbers() {
    let result = ``
    for (let i = 1; i <= 10; i++) {
        result += `${i}<br>`;
    }
    document.getElementById("output5").innerHTML = `${result}`;
}

function countDown() {
    let downCount = ``;
    for (let i = 5; i >= 0; i--) {
        downCount += `${i}<br>`;
    }
    document.getElementById("output5").innerHTML = `${downCount}`;
}

/*Box6*/

function calculateSquare() {
    let num = parseInt(document.getElementById("numeric3").value);
    document.getElementById("output6").innerHTML = `<P> The square of ${num}=${num * num}</P>`;
}

const addNum = (a, b) => a + b;
function addNumbers() {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let sum = addNum(num1, num2);
    document.getElementById("output6").innerHTML = `Sum of ${num1} and ${num2} is ${sum}`;
}



// Function to update the background color
function updateColor() {
    // Getting values from sliders
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    // Displaying the RGB values
    document.getElementById("redValue").innerText = red;
    document.getElementById("greenValue").innerText = green;
    document.getElementById("blueValue").innerText = blue;

    // Creating the RGB color string
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    // Arrow function to update background color
    const changeColor = (color) => {
        document.getElementById("colorBox").style.backgroundColor = color;
    };

    // Calling the function to change color
    changeColor(rgbColor);
}

function add(a, b) {
    return a + b;
}

// Function Expression for subtraction
const subtract = function (a, b) {
    return a - b;
};

// Arrow function for multiplication
const multiply = (a, b) => a * b;

// Arrow function for division
const divide = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";

// Main function to calculate based on selected operation
function calculate() {
    let num4 = parseFloat(document.getElementById("numeric4").value); // First number from input
    let num5 = parseFloat(document.getElementById("numeric5").value); // Second number from input
    let operation = document.getElementById("operation").value; // Selected operation
    let result;

    // Using switch-case to call the appropriate function
    switch (operation) {
        case "add":
            result = add(num4, num5); // Using num4 and num5 for addition
            break;
        case "subtract":
            result = subtract(num4, num5); // Using num4 and num5 for subtraction
            break;
        case "multiply":
            result = multiply(num4, num5); // Using num4 and num5 for multiplication
            break;
        case "divide":
            result = divide(num4, num5); // Using num4 and num5 for division
            break;
        default:
            result = "Invalid Operation";
    }

    // Displaying the result
    document.getElementById("output7").innerHTML = `Result: <strong>${result}</strong>`;
}

/*Box 9*/

// Task 1: Click Event - Toggle Button Color
let colorButton = document.getElementById("colorbutton");
colorButton.addEventListener("click", function () {
    colorButton.classList.toggle("active");
});

// Task 2: Keyboard Event - Log Keys Pressed
let keyLogger = document.getElementById("keyLogger");
keyLogger.addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
});

// Task 3: Form Event - Prevent Default Submission
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting
    alert("Form submission prevented!");
});


/*Box10*/

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;
    let name = document.getElementById("name5").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        document.getElementById("name5").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
        document.getElementById("name5").style.borderColor = "green";
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("email").style.borderColor = "green";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("password").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("password").style.borderColor = "green";
    }

    if (valid) {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("popup").style.display = "block";
    }
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}


/*Box11*/
function increaseCounter() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter += 1;
    document.getElementById("counter").innerText = counter;
}

function decreaseCounter() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter -= 1;
    document.getElementById("counter").innerText = counter;
}

function resetCounter() {
    document.getElementById("counter").innerText = 0;
}


/*Box 12*/
function togglePassword() {
    let passwordField = document.getElementById("newpassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        event.target.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        event.target.textContent = "Show Password";
    }
}

/* Box13*/
let clockInterval;
let isRunning = false;

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("toggleClock").addEventListener("click", function () {
    if (!isRunning) {
        clockInterval = setInterval(updateClock, 1000);
        this.textContent = "Stop Clock";
    } else {
        clearInterval(clockInterval);
        this.textContent = "Start Clock";
    }
    isRunning = !isRunning;
});

/*Box14*/
function submitFeedback() {
    const name = document.getElementById("names").value.trim();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !rating || !feedback) {
        alert("Please fill in all the fields.");
        return;
    }

    const card = document.createElement("div");
    card.className = "feedback-card";
    card.innerHTML = `<strong>${name}</strong> rated us ${rating}<br>
    <p>${feedback}</p>`;

    // Make sure feedbackList exists in your HTML
    document.getElementById("feedbackList").appendChild(card);

    // Corrected field clearing
    document.getElementById("names").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("feedback").value = "";
}


/*Box15*/
const quotes = [
    { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = `"${quotes[randomIndex].text}"`;
    document.getElementById("author").innerText = `- ${quotes[randomIndex].author}`;
}

/*Box16*/

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleComplete(element) {
    element.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}

/*Box17*/
function changeHeading() {
    document.getElementById("domHeading").innerText = "JavaScript is Fun!";
}

function addNewParagraph() {
    const p = document.createElement("p");
    p.innerText = "This is a new paragraph!";
    document.getElementById("domContent").appendChild(p);
}

function toggleDark() {
    if (document.body.classList.contains("darkmode")) {//Use contains so as to see whether it is in dark mode or not
        document.getElementById("changeMode").innerText = `Toggle Mode🌙`;
    } else {
        document.getElementById("changeMode").innerText = `Toggle Mode☀️`;
    }
    document.body.classList.toggle("darkmode");
}


/*Box18*/

function storeName() {
    const input = document.getElementById("userName");
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    sessionStorage.setItem("userName", name);
    document.getElementById("welcomeMessage").innerText = `Welcome, ${name}!`;
    input.style.display = "none";
}

/*Box19*/

// Load saved note on page load

// Save note to localStorage
function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("savedNote", note);
    displayNote();
}

// Clear saved note
function clearNote() {
    localStorage.removeItem("savedNote");
    displayNote();
}

// Display saved note
function displayNote() {
    const saved = localStorage.getItem("savedNote");
    const display = document.getElementById("displayNote");
    if (saved && saved.trim() !== "") {
        display.innerHTML = `<strong>Your Saved Note:</strong><br>${saved}`;
    } else {
        display.innerHTML = "No note saved yet.";
    }
}

/*Box20*/
window.onload = function () {
    // Box18
    const name = sessionStorage.getItem("userName");
    if (name) {
        document.getElementById("welcomeMessage").innerText = `Welcome back, ${name}!`;
        document.getElementById("userName").style.display = "none";
    }

    // Box19
    displayNote();

    // Box20
    loadEntries();
};

function saveEntry() {
    const text = document.getElementById("journalEntry").value.trim();
    if (!text) {
        alert("Please write something before saving.");
        return;
    }

    const entry = {
        content: text,
        date: new Date().toLocaleString()
    };

    let journal = JSON.parse(localStorage.getItem("journal")) || [];
    journal.unshift(entry); // Add to start
    localStorage.setItem("journal", JSON.stringify(journal));
    document.getElementById("journalEntry").value = "";
    loadEntries();
}

function loadEntries() {
    const journal = JSON.parse(localStorage.getItem("journal")) || [];
    const container = document.getElementById("entries");
    container.innerHTML = "";

    if (journal.length === 0) {
        container.innerHTML = "<p>No entries yet.</p>";
        return;
    }

    journal.forEach(entry => {
        container.innerHTML += `
        <div class="entry">
          <time>${entry.date}</time>
          <p>${entry.content}</p>
        </div>
      `;
    });
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        if (document.body.classList.contains("darkmode")) {
            document.getElementById("changeMode").innerText = `Toggle Mode🌙`;
            document.body.classList.toggle("darkmode");
        }
    }
}