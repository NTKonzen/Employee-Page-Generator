const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Templates = require('./templates/templates')

const employeeArray = []

const ryan = new Manager('Ryan', 1, 2, 'email@email.com')
const matthew = new Manager('Matthew', 12, 444, 'email@email.com')
employeeArray.push(matthew)
employeeArray.push(ryan)
employeeArray.push(new Engineer('Jessica', 1828685, 'JSOolong', 'email@email.com'))
employeeArray.push(new Intern('Rebecca', 9999, 'Stanford Univeristy', 'email@email.com'))

console.log(employeeArray)

employeeArray.forEach(employeeObj => {
    if (employeeObj.getRole() === 'Manager') {
        console.log(employeeObj.getRole())
    } else if (employeeObj.getRole() === 'Engineer') {
        console.log(employeeObj.getRole())
    } else if (employeeObj.getRole() === 'Intern') {
        console.log(employeeObj.getRole())
    }
})