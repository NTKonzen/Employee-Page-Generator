const fs = require('fs')
const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Templates = require('./templates/templates')

const employeeArray = []

function writeToFile(fileName, data) {
    if (!fs.existsSync('./output')) {
        fs.mkdir('./output', (err) => { if (err) throw err })
    }

    fs.writeFile(fileName, data, { encoding: 'utf8', recursive: true }, function (err) {
        if (err) {
            console.log(err.message)
        } else {
            console.log(`Success! File was written to ${fileName}`)
        }
    })
};

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
async function getEngineers() {
    do {
        let newEng = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of this engineer: \n'
            }, {
                name: 'id',
                type: 'input',
                message: 'Enter this engineer\'s id: \n'
            }, {
                name: 'email',
                type: 'input',
                message: 'Enter this engineer\'s email: \n'
            }, {
                name: 'github',
                type: 'input',
                message: 'Enter this engineer\s GitHub username'
            }
        ])
        var more = await inquirer.prompt({
            name: 'more',
            type: 'confirm',
            message: 'Do you want to add another engineer?\n'
        })
        employeeArray.push(new Engineer(newEng.name, newEng.id, newEng.email, newEng.github))
    } while (more.more === true)
}
async function getInterns() {
    do {
        let newInt = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of this intern: \n'
            }, {
                name: 'id',
                type: 'input',
                message: 'Enter this intern\'s id: \n'
            }, {
                name: 'email',
                type: 'input',
                message: 'Enter this intern\'s email: \n'
            }, {
                name: 'school',
                type: 'input',
                message: 'Enter this intern\s school name'
            }
        ])
        var more = await inquirer.prompt({
            name: 'more',
            type: 'confirm',
            message: 'Do you want to add another intern?\n'
        })
        employeeArray.push(new Intern(newInt.name, newInt.id, newInt.email, newInt.school))
    } while (more.more === true)
}

async function main() {

    await getManagers()

    await getEngineers()

    await getInterns()

    employeeArray.forEach((employeeObj, index) => {
        if (employeeObj.getRole() === 'Manager') {
            employeeArray[index] = Templates.getManager(employeeObj.name, employeeObj.id, employeeObj.officeNumber, employeeObj.email)
        } else if (employeeObj.getRole() === 'Engineer') {
            employeeArray[index] = Templates.getEngineer(employeeObj.name, employeeObj.id, employeeObj.github, employeeObj.email)
        } else if (employeeObj.getRole() === 'Intern') {
            employeeArray[index] = Templates.getIntern(employeeObj.name, employeeObj.id, employeeObj.school, employeeObj.email)
        }
    })

    writeToFile('./output/team.html', Templates.generatePage(employeeArray))

}

main()


