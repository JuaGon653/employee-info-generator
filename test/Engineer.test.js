const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe("Engineer", () => {
    describe("Constructor", () => {
        it("should create new Engineer object with passed parameters setting properties", () => {
            let name = 'Juan';
            let id = 9;
            let email = "juaninnb4096@gmail.com";
            let github = 'JuaGon653'
            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        })
        it("engineer object should be instance of employee class", () => {
            const obj = new Engineer('Juan', 9, 'juaninnb4096@gmail.com', 'JuaGon653');

            expect(obj instanceof Employee).toEqual(true);
        })
    })
    describe('Methods', () => {
        it("should return the github username of Engineer object", () => {
            let github = 'JuaGon653'
            const obj = new Engineer("Juan", 9, "juaninnb4096@gmail.com", github);

            expect(obj.getGithub()).toEqual(github);
        })
        it("should return 'Engineer' after calling getRole()", () => {
            const obj = new Engineer("Juan", 9, "juaninnb4096@gmail.com", "JuaGon653");

            expect(obj.getRole()).toEqual('Engineer');
        })
        it("should return name of Engineer object", () => {
            let name = "Juan";
            const obj = new Engineer(name, 9, 'juaninnb4096@gmail.com', 'JuaGon653');

            expect(obj.getName()).toEqual(name);
        })

        it("should return id of Engineer object", () => {
            let id = 9;
            const obj = new Engineer("Juan", id, 'juaninnb4096@gmail.com','JuaGon653');

            expect(obj.getId()).toEqual(id);
        })

        it("should return email of Employee object", () => {
            let email = "juaninnb4096@gmail.com";
            const obj = new Engineer("Juan", 9, email, 'JuaGon653');

            expect(obj.getEmail()).toEqual(email);
        })
    })
    


})