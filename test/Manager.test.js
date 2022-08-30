const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

describe("Manager", () => {
    describe("Constructor", () => {
        it("should create new Manager object with passed parameters setting properties", () => {
            let name = 'Juan';
            let id = 9;
            let email = "juaninnb4096@gmail.com";
            let officeNum = 46;
            const obj = new Manager(name, id, email, officeNum);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNum).toEqual(officeNum);
        })
        it("Manager object should be instance of employee class", () => {
            const obj = new Manager('Juan', 9, 'juaninnb4096@gmail.com', 46);

            expect(obj instanceof Employee).toEqual(true);
        })
    })
    describe('Methods', () => {
        it("should return 'Manager' after calling getRole()", () => {
            const obj = new Manager("Juan", 9, "juaninnb4096@gmail.com", 46);

            expect(obj.getRole()).toEqual('Manager');
        })
        it("should return name of Manager object", () => {
            let name = "Juan";
            const obj = new Manager(name, 9, 'juaninnb4096@gmail.com', 46);

            expect(obj.getName()).toEqual(name);
        })

        it("should return id of Manager object", () => {
            let id = 9;
            const obj = new Manager("Juan", id, 'juaninnb4096@gmail.com', 46);

            expect(obj.getId()).toEqual(id);
        })

        it("should return email of Manager object", () => {
            let email = "juaninnb4096@gmail.com";
            const obj = new Manager("Juan", 9, email, 46);

            expect(obj.getEmail()).toEqual(email);
        })
    })
})