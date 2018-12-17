
const express          = require('express');
const router           = express.Router();
const controller       = require("./controller")

router.post('/', controller.addUserData);

router.get('/', controller.getUserData);


module.exports = router;
