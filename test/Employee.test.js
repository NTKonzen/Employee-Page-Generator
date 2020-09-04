const Employee = require('../lib/Employee.js')

describe('Employee Class', () => {
    describe('getName', () => {
        it('returns the employee\'s name', () => {
            expect(new Employee('jim', 1, 'email').getName()).toBe
        })
    })
})