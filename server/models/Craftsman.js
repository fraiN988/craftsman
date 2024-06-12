const mongoose = require('mongoose');

const craftsmanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  specialization: { type: String, required: true },
  photo: { type: String, required: true },
  serviceName: { type: String, required: true },
  city: { type: String, required: true },
  rating: { type: Number, default: 0 },
});

module.exports = mongoose.model('Craftsman', craftsmanSchema);
