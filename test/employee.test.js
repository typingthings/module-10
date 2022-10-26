const Employee = require ("../lib/employee")
describe ("employee",()=>{
    describe ("testing on email, id, and name",()=>{
        const employee = new Employee ("John", 123, "johnmail@email.com")
        test ("email",()=>{
           expect (employee.email).toEqual("johnmail@email.com")
        
        })
        test ("id", ()=>{
            expect (employee.id).toEqual(123)
        })
        test ("name", ()=>{
            expect (employee.name).toEqual("John")
        })
    })
    describe ("testing getName, getId, getEmail, and getRole", ()=>{
        const employee = new Employee ("Dave", 1234, "davemail@email.com")
        test ("getName",()=>{
            expect (employee.getName()).toEqual("Dave")
        })
        test ("getId", ()=>{
            expect (employee.getId()).toEqual(1234)
        })
        test ("getEmail", ()=>{
            expect (employee.getEmail()).toEqual("davemail@email.com")
        })
        test ("getRole", ()=>{
            expect (employee.getRole()).toEqual("Employee")
        })
    })
})