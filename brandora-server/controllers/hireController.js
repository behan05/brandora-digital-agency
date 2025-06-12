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
      message
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'Required fields missing' });
    }

    const newRecruiter = new HireMe({
      fullName,
      email,
      phone,
      companyOrProject,
      budget,
      serviceRequired,
      message
    });

    await newRecruiter.save();
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
