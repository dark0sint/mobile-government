require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Sample Model (User )
const UserSchema = new mongoose.Schema({
  nik: String,
  name: String,
  password: String
});
const User = mongoose.model('User ', UserSchema);

// Sample Route: Get public services (e.g., KTP)
app.get('/api/services/kependuduk', (req, res) => {
  res.json({
    services: [
      { id: 1, name: 'Pengajuan e-KTP', description: 'Apply for electronic ID card in Bandung' },
      { id: 2, name: 'Akta Kelahiran', description: 'Birth certificate services' }
    ]
  });
});

// Sample Auth Route
app.post('/api/auth/register', async (req, res) => {
  const { nik, name, password } = req.body;
  const hashed = await require('bcryptjs').hash(password, 10);
  const user = new User({ nik, name, password: hashed });
  await user.save();
  res.json({ message: 'User  registered' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
