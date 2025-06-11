const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const hireRoutes = require('./routes/hireRoutes');
require('dotenv').config();


// Connect DB
// here...

app.use(express.json());

app.use('/api/users', contactRoutes);
app.use('/api/users', hireRoutes);

app.listen(process.env.PORT || 3000,
    () => console.log(`Server running on port ${process.env.PORT}`)
)