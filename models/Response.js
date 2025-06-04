const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Form',
      required: true
    },
    email: {
      type: String,
      required: true
    },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        answer: mongoose.Schema.Types.Mixed
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Response', responseSchema);
