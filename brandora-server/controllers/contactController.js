const UserContact = require('../models/Contact');

exports.contact = async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    // create and save contact entry
    const newContact = new UserContact({
      fullName,
      email,
      phone,
      subject,
      message
    });
    newContact.save();

    res.status(200).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
