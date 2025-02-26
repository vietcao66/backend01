const express = require("express");
const { getHomepage } = require("../controllers/homeController");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("sample.ejs");
});

//router.Method('/route', handler)
router.get("/", getHomepage);
router.get("/abc", (req, res) => {
  res.send("THIS IS ABCABC PAGE");
});

module.exports = router;
