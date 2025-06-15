const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // новое поле
  type: { type: String, enum: ['text', 'dropdown'], required: true },
  label: { type: String, required: true },
  options: [String] // для dropdown может быть null или массив
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: null },
  questions: [QuestionSchema],
  creatorEmail: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', FormSchema);
