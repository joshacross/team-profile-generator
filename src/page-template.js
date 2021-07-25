const teamData = require('../lib');

// create Team Name/ About

const generateTeam = teamName => {
    if(!teamName) {
        return '';
    }

    return `
    <header class="my-3" id="team">
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
        <div class="card col" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Jared</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 12345</li>
                <li class="list-group-item">Role: Employee</li>
                <li class="list-group-item">
                    Email: <a href="mailto:jared@fakemail.com>Jared@fakemail.com</a>
                </li>
                <li class="list-group-item">
                    GitHub: <a href="https://github.io/${gitHubUsername}">${gitHubUsername}</a>
                </li>
            </ul>
        <div class="card-body"></div>
    </div>
    `
}

// create Enginner Card

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
                <div class="row">
                    ${generateManager(Manager)}
                <div class="card col" style="width: 18rem">
                    <div class="card-body">
                    <h5 class="card-title">Jared</h5>
                    <p class="card-text">Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 12345</li>
                    <li class="list-group-item">Role: Employee</li>
                    <li class="list-group-item">Email: Jared@fakemail.com</li>
                    <li class="list-group-item"></li>
                    </ul>
                    <div class="card-body"></div>
                </div>
                <div class="card col" style="width: 18rem">
                    <div class="card-body">
                    <h5 class="card-title">Jared</h5>
                    <p class="card-text">Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 12345</li>
                    <li class="list-group-item">Role: Employee</li>
                    <li class="list-group-item">Email: Jared@fakemail.com</li>
                    <li class="list-group-item"></li>
                    </ul>
                    <div class="card-body"></div>
                </div>
                <div class="card col" style="width: 18rem">
                    <div class="card-body">
                    <h5 class="card-title">Jared</h5>
                    <p class="card-text">Manager</p>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 12345</li>
                            <li class="list-group-item">Role: Employee</li>
                            <li class="list-group-item">Email: Jared@fakemail.com</li>
                            <li class="list-group-item"></li>
                        </ul>
                    <div class="card-body"></div>
                </div>
                </div>
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