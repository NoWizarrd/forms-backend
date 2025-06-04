const Form = require('../models/Form');

exports.createForm = async (req, res) => {
  try {
    const { title, description, questions, creatorEmail } = req.body;

    if (!creatorEmail) {
      return res.status(400).json({ message: 'creatorEmail is required' });
    }

    const newForm = new Form({ title, description, questions, creatorEmail });
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

exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
