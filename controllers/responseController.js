const Response = require('../models/Response');
const Form = require('../models/Form');

exports.submitResponse = async (req, res) => {
  const { formId } = req.params;
  const { email, answers } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ message: 'Форма не найдена' });
    }

    const newResponse = new Response({
      formId,
      email,
      answers
    });

    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (err) {
    console.error('Ошибка при сохранении ответа:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

exports.getResponsesByFormId = async (req, res) => {
  const { formId } = req.params;

  try {
    const responses = await Response.find({ formId });
    res.status(200).json(responses);
  } catch (err) {
    console.error('Ошибка при получении ответов:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};


exports.getAllResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
