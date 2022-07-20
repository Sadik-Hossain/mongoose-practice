const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

//* .model("singular name of collection obj", schema)
module.exports = mongoose.model("User", userSchema);
