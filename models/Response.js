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
        name: {
          type: string,
          required: true
        },
        answer: mongoose.Schema.Types.Mixed
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Response', responseSchema);
