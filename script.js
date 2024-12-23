
const passwordInput = document.getElementById('password');
const generateButton = document.querySelector('button');


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?/';


function generatePassword() {
    const passwordLength = parseInt(prompt('Enter password length (min: 8, max: 128):'), 10);

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please enter a valid number between 8 and 128.');
        return;
    }

    const includeLowercase = confirm('Include lowercase letters?');
    const includeUppercase = confirm('Include uppercase letters?');
    const includeNumbers = confirm('Include numbers?');
    const includeSymbols = confirm('Include symbols?');

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        alert('You must select at least one character type!');
        return;
    }

    let availableChars = '';
    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    passwordInput.value = generatedPassword;
}


generateButton.addEventListener('click', generatePassword);
