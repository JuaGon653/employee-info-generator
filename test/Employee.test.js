
const Employee = require('../lib/employee');

describe("Employee", () => {
    describe('Constructor', () => {
        it("should create new Employee object with passed parameters setting properties", () => {
        let name = 'Juan';
        let id = 9;
        let email = "juaninnb4096@gmail.com";
        const obj = new Employee(name, id, email);

        expect(obj.name).toEqual(name);
        expect(obj.id).toEqual(id);
        expect(obj.email).toEqual(email);
        })
    })
    
    describe('Methods', () => {
        it("should return name of Employee object", () => {
            let name = "Juan";
            const obj = new Employee(name, 9, 'juaninnb4096@gmail.com');

            expect(obj.getName()).toEqual(name);
        })

        it("should return id of Employee object", () => {
            let id = 9;
            const obj = new Employee("Juan", id, 'juaninnb4096@gmail.com');

            expect(obj.getId()).toEqual(id);
        })

        it("should return email of Employee object", () => {
            let email = "juaninnb4096@gmail.com";
            const obj = new Employee("Juan", 9, email);

            expect(obj.getEmail()).toEqual(email);
        })

        it("should return 'Employee' after calling getRole()", () => {
            const obj = new Employee("Juan", 9, 'juaninnb4096@gmail.com');

            expect(obj.getRole()).toEqual('Employee');
        })
    })
})