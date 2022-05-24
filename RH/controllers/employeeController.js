const Employee = require("../models/employee");

module.exports = class EmployeeController {
  static async showEmployees(req, res) {
    const employees = await Employee.getEmployees()

    res.render("employees/all", { employees });
  }

  static createEmployee(req, res) {
    res.render('employees/create')
  }

  static createEmployeePost(req, res) {
    const name = req.body.name
    const department = req.body.department
    const salary = req.body.salary
    const email = req.body.email
    const date = req.body.date

    const employee = new Employee(name, department, salary, email, date)

    employee.save()

    res.redirect('/')
  }
}


