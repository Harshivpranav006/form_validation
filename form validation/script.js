document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const departmentInput = document.getElementById('department');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const phoneError = document.getElementById('phoneError');
    const departmentError = document.getElementById('departmentError');
    const successMsg = document.getElementById('successMsg');
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('addressError');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        phoneError.textContent = '';
        departmentError.textContent = '';
        addressError.textContent = '';
        successMsg.style.display = 'none';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            valid = false;
        }
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            valid = false;
        }
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Phone number is required.';
            valid = false;
        } else if (!/^\d{10}$/.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Phone number must be 10 digits.';
            valid = false;
        }
        if (departmentInput.value === '') {
            departmentError.textContent = 'Please select a department.';
            valid = false;
        }
        if (addressInput.value.trim() === '') {
            addressError.textContent = 'Address is required.';
            valid = false;
        }

        if (valid) {
            successMsg.style.display = 'block';
            form.reset();
        }
    });
}); 