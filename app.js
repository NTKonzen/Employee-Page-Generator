const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Templates = require('./templates/templates')

const employeeArray = []

async function getManagers() {
    do {
        let newMan = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of this manager: \n'
            }, {
                name: 'id',
                type: 'input',
                message: 'Enter this manager\'s id: \n'
            }, {
                name: 'email',
                type: 'input',
                message: 'Enter this manager\'s email: \n'
            }, {
                name: 'officeNumber',
                type: 'input',
                message: 'Enter this manager\s office number'
            }
        ])
        var more = await inquirer.prompt({
            name: 'more',
            type: 'confirm',
            message: 'Do you want to add another manager?\n'
        })
        employeeArray.push(new Manager(newMan.name, newMan.id, newMan.email, newMan.officeNumber))
    } while (more.more === true)
}

async function main() {

    await getManagers()

    employeeArray.forEach((employeeObj, index) => {
        console.log(index)
        if (employeeObj.getRole() === 'Manager') {
            employeeArray[index] = Templates.getManager(employeeObj.name, employeeObj.id, employeeObj.officeNumber, employeeObj.email)
        } else if (employeeObj.getRole() === 'Engineer') {
            employeeArray[index] = Templates.getEngineer(employeeObj.name, employeeObj.id, employeeObj.github, employeeObj.email)
            console.log(employeeObj.getRole())
        } else if (employeeObj.getRole() === 'Intern') {
            employeeArray[index] = Templates.getIntern(employeeObj.name, employeeObj.id, employeeObj.school, employeeObj.email)
            console.log(employeeObj.getRole())
        }
    })


}

main()


