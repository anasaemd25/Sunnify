export const checkEmailFormat = (email) => {
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidationRegex.test(email)) return "Invalid email format, should be like someone@example.com";
    return null;
}

export const emailValidators = [
    checkEmailFormat
];

