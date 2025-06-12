const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const hireRoutes = require('./routes/hireRoutes');
require('dotenv').config();
const connectDB = require('./config/dbConfig');
const newsletterRoutes = require('./routes/newsLetterRouter');
const cors = require('cors');

// Connect DB
connectDB();

app.use(cors());
app.use(express.json());

// this is for render cloud server.
app.get('/', (req, res) => {
    res.send('Backend is running ✅');
});

// basePath
app.use('/api/users', contactRoutes);
app.use('/api/users', hireRoutes);
app.use('/api/users', newsletterRoutes);

app.listen(process.env.PORT || 3000,
    () => console.log(`Server running on port ${process.env.PORT}`)
)