const Manager = require('../lib/Manager.js')

describe('Manager Class', () => {
    describe('getName', () => {
        it('returns the Manager\'s name', () => {
            expect(new Manager('Jerry', 2, 'email', 1234).getName()).toBe('Jerry')
        })
    })
    describe('getID', () => {
        it('returns the Manager\'s name', () => {
            expect(new Manager('Jerry', 2, 'email', 1234).getID()).toBe(2)
        })
    })
    describe('getEmail', () => {
        it('returns the Manager\'s email', () => {
            expect(new Manager('Jerry', 2, 'email', 1234).getEmail()).toBe('email')
        })
    })
    describe('getRole', () => {
        it('returns the Manager\'s role', () => {
            expect(new Manager('Jerry', 2, 'email', 1234).getRole()).toBe('Manager')
        })
    })
    describe('getOfficeNumber', () => {
        it('returns the Manager\'s office number', () => {
            expect(new Manager('Jerry', 2, 'email', 1234).getOfficeNumber()).toBe(1234)
        })
    })
})