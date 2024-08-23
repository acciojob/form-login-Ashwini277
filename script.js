function getFormValue(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine the first and last names
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using an alert
    alert(fullName);
}

// Add an event listener to the form to handle submission
document.getElementById('loginForm').addEventListener('submit', getFormValue);


}
