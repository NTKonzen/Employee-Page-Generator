const Intern = require('../lib/Intern.js')

describe('Intern Class', () => {
    describe('getName', () => {
        it('returns the Intern\'s name', () => {
            expect(new Intern('Samantha', 4, 'email', 'Stanford').getName()).toBe('Samantha')
        })
    })
    describe('getID', () => {
        it('returns the Intern\'s id', () => {
            expect(new Intern('Samantha', 4, 'email', 'Stanford').getID()).toBe(4)
        })
    })
    describe('getEmail', () => {
        it('returns the Intern\'s email', () => {
            expect(new Intern('Samantha', 4, 'email', 'Stanford').getEmail()).toBe('email')
        })
    })
    describe('getRole', () => {
        it('returns the Intern\'s role', () => {
            expect(new Intern('Samantha', 4, 'email', 'Stanford').getRole()).toBe('Intern')
        })
    })
    describe('getSchool', () => {
        it('returns the Intern\'s school', () => {
            expect(new Intern('Samantha', 4, 'email', 'Stanford').getSchool()).toBe('Stanford')
        })
    })
})