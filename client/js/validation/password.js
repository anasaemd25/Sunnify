const allowedSpecialCharacters = "._+*!?$&#-";

export const checkPasswordLength = (password) => {
    const minLength = 8;

    if (password.length < minLength) return `Must be at least ${minLength} characters long`;
    return null;
}

export const checkPasswordCapitalLetter = (password) => {
    const capitalLetterRegex = /[A-Z]+/;

    if (!capitalLetterRegex.test(password)) return "Must contain a capital letter";
    return null;
}

export const checkPasswordLowercaseLetter = (password) => {
    const lowercaseLetterRegex = /[a-z]+/;

    if (!lowercaseLetterRegex.test(password)) return "Must contain a lowercase letter";
    return null;
}

export const checkPasswordNumber = (password) => {
    const numberRegex = /[0-9]+/;

    if (!numberRegex.test(password)) return "Must contain a number";
    return null;
}

export const checkPasswordSpecialCharacter = (password) => {
    const specialCharCheckRegex = RegExp(`[${allowedSpecialCharacters}]+`);

    if (!specialCharCheckRegex.test(password)) return `Must contain at least 1 special character (${allowedSpecialCharacters})`;
    return null;
}

export const checkPasswordFormat = (password) => {
    const passwordFormatRegex = RegExp(`^[a-zA-Z0-9${allowedSpecialCharacters}]+$`);

    if (!passwordFormatRegex.test(password)) return `Password can only contain letters, numbers, and ${allowedSpecialCharacters} special characters`;
    return null;
}

export const checkFullPassword = (password) => {
    const passwordValidationRegex = RegExp(`^[a-zA-Z0-9${allowedSpecialCharacters}]{8,}$`);

    if (!passwordValidationRegex.test(password)) return "Invalid password format! Please check your password for any mistakes!";
    return null;
}

export const passwordValidators = [
    checkPasswordLength,
    checkPasswordCapitalLetter,
    checkPasswordLowercaseLetter,
    checkPasswordNumber,
    checkPasswordSpecialCharacter,
    checkPasswordFormat
];
