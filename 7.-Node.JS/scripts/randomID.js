const crypto = require("crypto");

const id = crypto.randomBytes(10).toString("hex");

console.log(id);