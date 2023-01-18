const express = require("express");
const router = express.Router();
const { GenerateImage } = require("../controllers/aiController");

router.post('/generateimage', GenerateImage);

module.exports = router;