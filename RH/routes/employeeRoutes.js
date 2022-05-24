const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/", EmployeeController.showEmployees);
router.get("/create", EmployeeController.createEmployee);
router.post("/create", EmployeeController.createEmployeePost);

module.exports = router;
