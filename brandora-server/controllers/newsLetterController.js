
const NewsLatter = require('../models/NewsLatter');

async function newsletter(req, res) {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Required fields missing" })
        }

        // create and save contact entry
        await new NewsLatter({ email }).save();
        res.status(200).json({ message: 'Thank you for your Subscription!' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = newsletter;