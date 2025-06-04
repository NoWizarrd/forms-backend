const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: { type: String, enum: ['text', 'single', 'multiple'], required: true },
  options: [String], // только если выбор
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [QuestionSchema],
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // создатель
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', FormSchema);
