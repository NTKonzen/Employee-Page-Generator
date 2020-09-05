const Employee = require('../lib/Employee.js')

describe('Employee Class', () => {
    describe('getName', () => {
        it('returns the employee\'s name', () => {
            expect(new Employee('jim', 1, 'email').getName()).toBe('jim')
        })
    })
    describe('getID', () => {
        it('returns the employee\'s id', () => {
            expect(new Employee('jim', 1, 'email').getID()).toBe(1)
        })
    })
    describe('getEmail', () => {
        it('returns the employee\'s email', () => {
            expect(new Employee('jim', 1, 'email').getEmail()).toBe('email')
        })
    })
})