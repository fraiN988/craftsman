const Craftsman = require('../models/Craftsman');
const { craftsmanValidation } = require('../utils/validation');

exports.addCraftsman = async (req, res) => {
  const { error } = craftsmanValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, surname, specialization, photo, serviceName, city } = req.body;

  const craftsman = new Craftsman({
    name,
    surname,
    specialization,
    photo,
    serviceName,
    city,
  });

  try {
    await craftsman.save();
    res.status(201).send('Craftsman added');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.removeCraftsman = async (req, res) => {
  try {
    await Craftsman.findByIdAndDelete(req.params.id);
    res.send('Craftsman removed');
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateCraftsman = async (req, res) => {
  const { error } = craftsmanValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, surname, specialization, photo, serviceName, city } = req.body;

  try {
    const craftsman = await Craftsman.findByIdAndUpdate(
      req.params.id,
      { name, surname, specialization, photo, serviceName, city },
      { new: true }
    );
    res.json(craftsman);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getCraftsmen = async (req, res) => {
  try {
    const craftsmen = await Craftsman.find();
    res.json(craftsmen);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getCraftsman = async (req, res) => {
  try {
    const craftsman = await Craftsman.findById(req.params.id);
    res.json(craftsman);
  } catch (err) {
    res.status(400).send(err);
  }
};
