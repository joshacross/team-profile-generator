const teamData = require('../lib');

// create Team Name/ About

const generateTeam = teamName => {
    if(!teamName) {
        return '';
    }

    return `
    <header class="my-3 bg-danger.bg-gradient text-white" id="team">
        <h6 class="text-dark p-1 display-inline-block> Welcome to the
        <h2 class="text-dark p-2 display-inline-block"> ${teamName}</h2>
    </header>
    `
}

// create Team Manager's Card
const generateManager = managerData => {
    if(!managerData) {
        return '';
    }

    return `
        ${managerArr
            .map(({ managerName, managerBio, managerId, managerEmail, gitHubUsername, officeNumber }) => {
                return `
                    <div class="card col" style="width: 18rem">
                        <div class="bg-primary text-white">
                            <div class="card-header">Manager</div>
                            <div class="card-body">
                                <h5 class="card-title">${managerName}</h5>
                                <p class="card-text">${managerBio}</p>
                            </div>
                        <div class="bg-light text-dark">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${managerId}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${managerEmail}>${managerEmail}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub: <a href="https://github.io/${gitHubUsername} target="_blank">${gitHubUsername}</a>
                            </li>
                            <li class="list-group-item">
                            Office Number: <a href="tel:${officeNumber}>${officeNumber}</a>
                            </li>
                        </ul>
                    </div>
                `;
            })
        .join('')}
    `
}



// create Enginner Card
const generateEngineer = engineerData => {
    return `
        ${engineerArr
            .map(({ engineerName, engineerBio, engineerId, engineerEmail, gitHubUsername }) => {
                return `
                    <div class="card col" style="width: 18rem">
                        <div class="bg-primary text-white">
                            <div class="card-header">engineer</div>
                            <div class="card-body">
                                <h5 class="card-title">${engineerName}</h5>
                                <p class="card-text">${engineerBio}</p>
                            </div>
                        <div class="bg-light text-dark">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineerId}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${engineerEmail}>${engineerEmail}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub: <a href="https://github.io/${gitHubUsername} target="_blank">${gitHubUsername}</a>
                            </li>
                        </ul>
                    </div>
                `;
            })
        .join('')}
    `
}

// create Enginner Card
const generateEmployee = employeeData => {
    return `
        ${employeeArr
            .map(({ employeeName, employeeRole, employeeBio, employeeId, employeeEmail, gitHubUsername }) => {
                return `
                    <div class="card col" style="width: 18rem">
                        <div class="bg-primary text-white">
                            <div class="card-header">employee</div>
                            <div class="card-body">
                                <h5 class="card-title">${employeeName}</h5>
                                <h4 class="card-subtitle">${employeeRole}</h4>
                                <p class="card-text">${employeeBio}</p>
                            </div>
                        <div class="bg-light text-dark">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employeeId}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${employeeEmail}>${employeeEmail}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub: <a href="https://github.io/${gitHubUsername} target="_blank">${gitHubUsername}</a>
                            </li>
                        </ul>
                    </div>
                `;
            })
        .join('')}
    `
}

const generateIntern = internData => {
    return `
        ${internArr
            .map(({ internName, internBio, internId, internEmail, gitHubUsername }) => {
                return `
                    <div class="card col" style="width: 18rem">
                        <div class="bg-primary text-white">
                            <div class="card-header">intern</div>
                            <div class="card-body">
                                <h5 class="card-title">${internName}</h5>
                                <p class="card-text">${internBio}</p>
                            </div>
                        <div class="bg-light text-dark">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${internId}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${internEmail}>${internEmail}</a>
                            </li>
                            <li class="list-group-item">College: ${internSchool}</li>
                            <li class="list-group-item">Credit Hours: ${internCreditHours}</li>
                            <li class="list-group-item">
                                GitHub: <a href="https://github.io/${gitHubUsername} target="_blank">${gitHubUsername}</a>
                            </li>
                        </ul>
                    </div>
                `;
            })
        .join('')}
    `
}


// create Intern Card



module.exports = templateData => {
    const { Team, Manager, Engineer, Intern } = templateData;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <!-- Bootstrap CSS -->
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />

            <title>Team Profile Generator</title>
        </head>
        <body>
            ${generateTeam(Team)}
            <main>
            <div class="container text-center align-content-center">
                <div class="d-flex justify-content-around">
                    ${generateManager(Manager)}
                    ${generateEngineer(Engineer)}
                    ${generateIntern(Intern)}
                </div>
            </main>

            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"
            ></script>
        </body>
        </html>
`
}