const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Define the schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

// Method to generate JWT token for the user
userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id, username: this.username, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: '24h' 
  });
};

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
