const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const hireRoutes = require('./routes/hireRoutes');
require('dotenv').config();
const connectDB = require('./config/dbConfig');
const newsletterRoutes = require('./routes/newsLetterRouter');


// Connect DB
connectDB();

app.use(express.json());

// basePath
app.use('/api/users', contactRoutes);
app.use('/api/users', hireRoutes);
app.use('/api/users', newsletterRoutes);

app.listen(process.env.PORT || 3000,
    () => console.log(`Server running on port ${process.env.PORT}`)
)