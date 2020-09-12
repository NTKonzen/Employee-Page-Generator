const Templates = {
    getManager(name, id, officeNumber, email) {
        return `<div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class='mb-0'><i class="fas fa-user"></i> Manager</h4>
            </div>
            <div class="card-body pb-0">
                <div class="card-title">
                    <h3 class='mb-0'>${name}</h3>
                </div>
            </div>
            <ul class='list-group mx-3 mb-3'>
                <li class='list-group-item'>ID: ${id}</li>
                <li class='list-group-item'>Office Number: ${officeNumber}</li>
                <li class='list-group-item'>Email: <a
                        href='mailto:${email}'>${email}</a></li>
            </ul>
        </div>
    </div>`
    },
    getEngineer(name, id, github, email) {
        return `<div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class='mb-0'><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body pb-0">
                <div class="card-title">
                    <h3 class='mb-0'>${name}</h3>
                </div>
            </div>
            <ul class='list-group mx-3 mb-3'>
                <li class='list-group-item'>ID: ${id}</li>
                <li class='list-group-item'>GitHub: <a href='https://www.github.com/${github}'
                        target='_blank'>${github}</a></li>
                <li class='list-group-item'>Email: <a
                        href='mailto:${email}'>${email}</a></li>
            </ul>
        </div>
    </div>`
    },
    getIntern(name, id, school, email) {
        return `<div class="col-md-6 col-lg-4 mb-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h4 class='mb-0'><i class="fas fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="card-body pb-0">
                <div class="card-title">
                    <h3 class='mb-0'>${name}</h3>
                </div>
            </div>
            <ul class='list-group mx-3 mb-3'>
                <li class='list-group-item'>ID: ${id}</li>
                <li class='list-group-item'>School: ${school}</li>
                <li class='list-group-item'>Email: <a
                        href='mailto:${email}'>${email}</a></li>
            </ul>
        </div>
    </div>`
    },
    generatePage(employeeArray) {
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Our Team</title>
        
            <!-- Bootstrap Link -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        
            <!-- Fontawesome Link -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
                integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
        </head>
        
        <style>
            body {
                background-image: url(./assets/images/paper_fibers_@2X.png);
            }
        
            .jumbotron {
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                background-color: #2d6a4f !important;
            }
        
            .card {
                transition-duration: .25s;
                border-radius: 15px !important;
            }
        
            .card:hover {
                transform: scale(1.01) translate(-1px, -1px);
                box-shadow: 10px 10px 25px -10px rgba(0, 0, 0, 0.3);
            }
        
            .card-header {
                border-top-right-radius: 15px !important;
                border-top-left-radius: 15px !important;
                background-color: #40916c !important;
            }
        </style>
        
        <body>
            <div class="container">
                <div class="row">
                    <div class="col jumbotron pb-1 pt-4 pl-3 bg-primary text-white">
                        <h1 class='display-3 font-weight-bold'>Our Team</h1>
                    </div>
                </div>
                <div class="row">
                    ${employeeArray.join(`
                    `)}
                </div>
            </div>
        </body>
        
        </html>`
    }
}

module.exports = Templates