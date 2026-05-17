const express = require("express");

const {
  generateStudyPlan,
  solveDoubt,
} = require("../controllers/aiController");

const router = express.Router();

router.post("/plan", generateStudyPlan);

router.post("/doubt", solveDoubt);

module.exports = router;