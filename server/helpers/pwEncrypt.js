const encryptor = require("argon2");

encryptPassword = async (pw) => {
    return await encryptor.hash(pw);
}

verifyPassword = async (pw, hash) => {
    return await encryptor.verify(hash, pw);
}

module.exports = { encryptPassword, verifyPassword };
