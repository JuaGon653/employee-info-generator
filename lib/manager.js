const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, employeeID, email, officeNum) {
        super(name, employeeID, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;