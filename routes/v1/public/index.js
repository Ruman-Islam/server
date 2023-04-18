const express = require('express');
const userInfoController = require('../../../controllers/publicControllers/index');
const router = express.Router();


router.post("/add_user", userInfoController.addNewUser)
router.get("/get_a_user", userInfoController.getAUser)


module.exports = router;