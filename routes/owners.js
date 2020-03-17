const express = require('express');

const router = express.Router();

const ownerController = require('../controllers/owner-controller');

router.get('/', ownerController.index);
router.post('/create', ownerController.create);
router.get('/:id', ownerController.show);
router.put('/update/:id', ownerController.update);
router.delete('/remove/:id', ownerController.destroy);

module.exports = router;
