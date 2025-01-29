function validateLoginForm() {
    let password = document.login_form.pwd.value;
    if (password.length < 8) {
        alert('Password must contain at least 8 characters');
        return false;
    }
    // If validation is successful, redirect to Booking.html
    alert('Login successful! Redirecting to Booking page...');
    window.location.href = "Booking.html";
    return false;
}

function validateRegistrationForm() {
    let password = document.registration_form.pwd.value;
    if (password.length < 8) {
        alert('Password must contain at least 8 characters');
        return false;
    }
    let confPassword = document.registration_form.cpwd.value;
    if (confPassword !== password) {
        alert('Both passwords must match. Please try again.');
        return false;
    }
    if (!document.registration_form.terms.checked) {
        alert('You must agree to the terms and conditions.');
        return false;
    }
    // If registration is successful, prompt to login
    alert('Registration successful! Please log in now.');
    login();
    return false;
}
