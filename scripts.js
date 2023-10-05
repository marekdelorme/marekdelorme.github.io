// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form fields here
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        let valid = true;

        if (!nameInput.value.trim()) {
            // Display error message for name input
            valid = false;
        }

        if (!isValidEmail(emailInput.value)) {
            // Display error message for email input
            valid = false;
        }

        if (!messageInput.value.trim()) {
            // Display error message for message input
            valid = false;
        }

        if (valid) {
            // Submit the form if all data is valid
            form.submit();
        } else {
            // Display error messages to the user
            // You can show error messages near the respective form fields
        }
    });

    // Add more functionality as needed

    // Function to validate an email address
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
