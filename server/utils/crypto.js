const crypto = require("crypto");
const { randomBytes } = crypto;
const iv = randomBytes(16);

const CRYPTO_KEY = process.env.CRYPTO_KEY;

const encrypt = (text) => {
  //aes - ADVANCED ENCRYPTION STANDARDS
  // 256 bits
  //cbc - CIPHER BLOCKER CHAINING
  const cipher = crypto.createCipheriv("aes-256-cbc", CRYPTO_KEY, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return {
    contentiv: iv.toString("hex"),
    content: encrypted,
  };
};

const decrypt = (hash, IV) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    CRYPTO_KEY,
    Buffer.from(IV, "hex")
  );
  let decrypted = decipher.update(hash, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
};

module.exports = {
  encrypt,
  decrypt,
};
