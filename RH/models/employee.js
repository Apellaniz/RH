const conn = require('../db/conn')

class Employee {
  constructor(name, department, salary, email, date) {
    this.name = name
    this.department = department
    this.salary = salary
    this.email = email
    this.date = date
  }

  save() {
    const employee = conn.db().collection('employees').insertOne({
      name: this.name,
      department: this.department,
      salary: this.salary,
      email: this.email,
      date: this.date,
    })

    return employee
  }
  static getEmployees() {
    const employees = conn.db().collection('employees').find().toArray()

    return employees
  }
}

module.exports = Employee
