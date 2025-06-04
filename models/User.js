const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  passwordHash: String, // если реализуем логин через backend
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
