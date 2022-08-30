const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

describe("Intern", () => {
    describe("Constructor", () => {
        it("should create new Intern object with passed parameters setting properties", () => {
            let name = 'Juan';
            let id = 9;
            let email = "juaninnb4096@gmail.com";
            let school = 'Canyon High School'
            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        })
        it("Intern object should be instance of employee class", () => {
            const obj = new Intern('Juan', 9, 'juaninnb4096@gmail.com', 'JuaGon653');

            expect(obj instanceof Employee).toEqual(true);
        })
    })
    describe('Methods', () => {
        it("should return the school of Intern object", () => {
            let school = 'Canyon High School'
            const obj = new Intern("Juan", 9, "juaninnb4096@gmail.com", school);

            expect(obj.getSchool()).toEqual(school);
        })
        it("should return 'Intern' after calling getRole()", () => {
            const obj = new Intern("Juan", 9, "juaninnb4096@gmail.com", "Canyon High School");

            expect(obj.getRole()).toEqual('Intern');
        })
        it("should return name of Intern object", () => {
            let name = "Juan";
            const obj = new Intern(name, 9, 'juaninnb4096@gmail.com', 'Canyon High School');

            expect(obj.getName()).toEqual(name);
        })

        it("should return id of Intern object", () => {
            let id = 9;
            const obj = new Intern("Juan", id, 'juaninnb4096@gmail.com','Canyon High School');

            expect(obj.getId()).toEqual(id);
        })

        it("should return email of Intern object", () => {
            let email = "juaninnb4096@gmail.com";
            const obj = new Intern("Juan", 9, email, 'JuaGon653');

            expect(obj.getEmail()).toEqual(email);
        })
    })
})