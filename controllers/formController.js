const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  try {
    const { title, description, questions, creatorEmail } = req.body;

    if (!creatorEmail) {
      return res.status(400).json({ message: 'creatorEmail is required' });
    }

    const cleanedQuestions = questions.map(q => {
      if (q.type === 'text') {
        return {
          name: q.name,
          type: q.type,
          label: q.label
          // не передаем options вообще
        };
      } else {
        return {
          name: q.name,
          type: q.type,
          label: q.label,
          options: q.options
        };
      }
    });

    const newForm = new Form({ title, description, questions: cleanedQuestions, creatorEmail });
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error creating form:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFormsByEmail = async (req, res) => {
  try {
    const email = req.params.email;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const forms = await Form.find({ creatorEmail: email });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllForms = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required as query parameter' });
    }

    const forms = await Form.find({ creatorEmail: email });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ error: 'Form not found' });
    res.json({ message: 'Form successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
