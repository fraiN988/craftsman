const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator');

const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '24h' 
  });
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await user.matchPassword(password); // Modified line

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const token = generateToken(user);

    res.json({ token, role: user.role });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
