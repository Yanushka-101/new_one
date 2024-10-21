const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://yanushka:S4ZW2pV5jhKQ1CBk@cluster0.x8xht.mongodb.net/Yanushka?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define a schema for storing contact messages
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Define the endpoint to receive contact form data
app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      // Create a new Contact instance and save it to the database
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error saving contact message:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });
  

// Define the port for your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
