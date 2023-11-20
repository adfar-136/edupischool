const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://adfarrasheed136:Margaret2476@cluster0.ashzien.mongodb.net/LoginLogout?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((e) => {
    console.log(e);
  });

  const userSchema = new mongoose.Schema({
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    address: String,
    phoneNumber: Number,
    profileImage: String,
    about: String, // Add about section
    education: {
      // Add education details
      degree: String,
      school: String,
      graduationYear: Number,
    },
    skills: [String], // Add skills as an array of strings
    interests: [String], // Add interests as an array of strings
  });
  const registerSchema = new mongoose.Schema({
    fullName: String,
    email:String,
    phoneNumber: Number,
    
  });
exports.User = mongoose.model("User", userSchema);
exports.Register = mongoose.model("Register", registerSchema);
