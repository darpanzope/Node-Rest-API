const express = require('express');

const router = express.Router();

const catController = require('../controllers/cat-controller');

router.get('/', catController.index);
router.post('/create', catController.create);
router.get('/:id', catController.show);
router.put('/update/:id', catController.update);
router.delete('/remove/:id', catController.destroy);

module.exports = router;
