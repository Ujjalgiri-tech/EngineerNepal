document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    // Name: only letters & spaces
    const namePattern = /^[A-Za-z ]{3,50}$/;

    // Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    // Clean up phone: remove spaces or dashes
    phone = phone.replace(/\s+/g, '').replace(/-/g, '');

    // Nepal numbers: start with 98 or 97, total 10 digits
    const phonePattern = /^(98|97)\d{8}$/;

    if (!namePattern.test(name)) {
        formMessage.textContent = "❗ Name should contain only letters and spaces.";
        formMessage.style.color = "red";
        return;
    }

    if (!emailPattern.test(email)) {
        formMessage.textContent = "❗ Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    if (!phonePattern.test(phone)) {
        formMessage.textContent = "❗ Phone must start with 98 or 97 and be 10 digits long.";
        formMessage.style.color = "red";
        return;
    }

    if (message.length < 10) {
        formMessage.textContent = "❗ Message should be at least 10 characters.";
        formMessage.style.color = "red";
        return;
    }

    // SUCCESS
    formMessage.textContent = "✔ Message sent successfully!";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});
