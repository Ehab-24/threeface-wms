const User = require("../models/User");
const bcrypt = require("bcrypt");

/* ********** Mutation ********** */

exports.createUser = async (req, res) => {
  try {
    const { name, imageUrl, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      imageUrl: imageUrl,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ********** Query ********** */

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("name imageUrl");
    res.status(200).json(user);
  } catch (err) {
    res.status(400);
  }
};
