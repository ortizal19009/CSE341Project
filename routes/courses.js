const express = require("express");
const router = express.Router();
const {getCourses} = require("../controllers/courses");

router.get("/",getCourses);
module.exports = router;

 