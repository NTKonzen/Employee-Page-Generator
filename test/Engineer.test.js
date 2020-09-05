const Engineer = require('../lib/Engineer.js')

describe('Engineer Class', () => {
    describe('getName', () => {
        it('returns the Engineer\'s name', () => {
            expect(new Engineer('Rachel', 3, 'email', 'RBeets').getName()).toBe('Rachel')
        })
    })
    describe('getID', () => {
        it('returns the Engineer\'s id', () => {
            expect(new Engineer('Rachel', 3, 'email', 'RBeets').getID()).toBe(3)
        })
    })
    describe('getEmail', () => {
        it('returns the Engineer\'s email', () => {
            expect(new Engineer('Rachel', 3, 'email', 'RBeets').getEmail()).toBe('email')
        })
    })
    describe('getRole', () => {
        it('returns the Engineer\'s role', () => {
            expect(new Engineer('Rachel', 3, 'email', 'RBeets').getRole()).toBe('Engineer')
        })
    })
    describe('getGithub', () => {
        it('returns the Engineer\'s github username', () => {
            expect(new Engineer('Rachel', 3, 'email', 'RBeets').getGithub()).toBe('RBeets')
        })
    })
})