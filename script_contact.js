document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var outputDiv = document.getElementById("output");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous confirmation content
        clearConfirmationContent();

        // Get form values
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Display entered details in the confirmation box
        displayConfirmationContent(fullName, email, message);

        // Clear input fields after submission
        contactForm.reset();

        // Hide confirmation box after 3 seconds
        setTimeout(function() {
            clearConfirmationContent();
        }, 7000);
    });

    function clearConfirmationContent() {
        var confirmationBox = document.querySelector(".confirmation-box");
        if (confirmationBox) {
            outputDiv.removeChild(confirmationBox);
        }
    }

    function displayConfirmationContent(fullName, email, message) {
        var confirmationBox = document.createElement("div");
        confirmationBox.className = "confirmation-box";
        confirmationBox.innerHTML = `
            <div class="confirmation-content">
                <h3>Submitted Information</h3>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
        `;
        outputDiv.appendChild(confirmationBox);
    }
});
