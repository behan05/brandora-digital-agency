const UserContact = require('../models/Contact');

exports.contact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const newContact = new UserContact({
      fullName,
      email,
      phone,
      subject,
      message
    });

    await newContact.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error); // help us debug
    res.status(500).json({ error: 'Internal server error' });
  }
};