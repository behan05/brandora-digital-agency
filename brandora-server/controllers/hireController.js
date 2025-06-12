const HireMe = require('../models/HireRequest');

exports.hireme = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyOrProject,
      budget,
      serviceRequired,
      message } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    // create a new entry.
    const newRecruiter = new HireMe({
      fullName,
      email,
      phone,
      companyOrProject,
      budget,
      serviceRequired,
      message
    });

    newRecruiter.save();
    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};