const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Templates = require('./templates/templates')

const employeeArray = []

const ryan = new Manager('Ryan', 1, 'email@email.com', 2)
const matthew = new Manager('Matthew', 12, 'email@email.com', 444)
employeeArray.push(matthew)
employeeArray.push(ryan)
employeeArray.push(new Engineer('Jessica', 1828685, 'email@email.com', 'JSOolong'))
employeeArray.push(new Intern('Rebecca', 9999, 'email@email.com', 'Stanford University'))

console.log(employeeArray)

employeeArray.forEach((employeeObj, index) => {
    console.log(index)
    if (employeeObj.getRole() === 'Manager') {
        employeeArray[index] = Templates.getManager(employeeObj.name, employeeObj.id, employeeObj.officeNumber, employeeObj.email)
        console.log(employeeObj.getRole())
    } else if (employeeObj.getRole() === 'Engineer') {
        employeeArray[index] = Templates.getEngineer(employeeObj.name, employeeObj.id, employeeObj.github, employeeObj.email)
        console.log(employeeObj.getRole())
    } else if (employeeObj.getRole() === 'Intern') {
        employeeArray[index] = Templates.getIntern(employeeObj.name, employeeObj.id, employeeObj.school, employeeObj.email)
        console.log(employeeObj.getRole())
    }
})

console.log(Templates.generatePage(employeeArray))