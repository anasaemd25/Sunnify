const usernameLength = { min: 3, max: 30 };
const allowedSpecialChars = "._-";

export const checkUsernameLength = (username) => {
    if (username.length < usernameLength.min) return `Must be at least ${usernameLength.min} characters long`;
    if (username.length > usernameLength.max) return `Must be less than ${usernameLength.max} characters long`;
    return null;
}

export const checkUsernameStart = (username) => {
    const startRegex = /^[a-zA-Z]/;

    if (!startRegex.test(username)) return "Must begin with a letter";
    return null;
}

export const checkUsernameValidCharacters = (username) => {
    const charCheckRegex = RegExp(`^[a-zA-Z0-9${allowedSpecialChars}]+$`);

    if (!charCheckRegex.test(username)) return `Allowed characters are letters, numbers, and ${allowedSpecialChars} special characters`;
    return null;
}

export const checkUsernameRepeatingSpecialCharacters = (username) => {
    const specCharCheckRegex = RegExp(`[${allowedSpecialChars}]{2,}`);

    if (specCharCheckRegex.test(username)) return "Cannot have more than 1 special character in a row";
    return null;
}

export const checkFullUsername = (username) => {
    const usernameValidationRegex = new RegExp(
        `^(?=.{${usernameLength.min},${usernameLength.max}}$)(?![0-9${allowedSpecialChars}])([a-zA-Z]+(?:[${allowedSpecialChars}]?[a-zA-Z0-9]+)*)$`
    );

    if (!usernameValidationRegex.test(username)) return "Invalid username format! Please check your username for any mistakes!";
    return;
}

export const usernameValidators = [
    checkUsernameLength,
    checkUsernameStart,
    checkUsernameValidCharacters,
    checkUsernameRepeatingSpecialCharacters
];
