const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  addCraftsman,
  removeCraftsman,
  updateCraftsman,
  getCraftsmen,
  getCraftsman,
} = require('../controllers/craftsmanController');

router.post('/add', auth, addCraftsman);
router.delete('/delete/:id', auth, removeCraftsman);
router.put('/update/:id', auth, updateCraftsman);
router.get('/', getCraftsmen);
router.get('/:id', getCraftsman);

module.exports = router;
