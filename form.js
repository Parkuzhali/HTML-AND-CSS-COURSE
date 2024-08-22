document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const password = document.getElementById('ps');
    const confirmPassword = document.getElementById('cp');
    const errorElements = document.querySelectorAll('.error');
    const email = document.getElementById('mail');

    form.addEventListener('submit', (event) => {
        errorElements.forEach(error => error.textContent = '');
        if (password.value !== confirmPassword.value) {
            errorElements[0].textContent = 'Passwords do not match!';
            errorElements[1].textContent = 'Passwords do not match!';
            event.preventDefault();
        }

        const phoneNumber = document.getElementById('ph').value;
        if (phoneNumber.length !== 10) {
            alert('Phone number must be 10 digits!');
            event.preventDefault();
        }
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            alert('Please select your gender!');
            event.preventDefault();
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert('Please enter a valid email address!');
            event.preventDefault();
        }
    });
});
