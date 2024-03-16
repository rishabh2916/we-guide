const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }

    // User authenticated successfully
    return res.status(200).json({ status: 'success', message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

module.exports = router;
