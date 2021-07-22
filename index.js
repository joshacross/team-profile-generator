const App = require('./lib/index');

new App().startApp();

/* The application must have these classes
1.) Employee
2.) Manager
3.) Engineer
4.) Intern

It also must have a class for __tests__ and must all pass

The first class is an employee parent class with the following properties
1.) Name
2.) ID
3.) Email
4.) getName()
5.) getId()
6.) getEmail()
7.) getRole()

-----

Manager
1.) officeNumber
2.) getRole() - overridden to return Manager

Engineer
1.) github - Github Username
2.) getGithub()
3.) getRole() Overridden to return Engineer

Intern
1.) School
2.) getSchool()
3.) getRole() - Overridden to return intern 

---
Consider adding validation to ensure that user input provided is in the proper expected format

---
Deliverable:
1.) A sample HTML file generated using the application must be submitted
2.) Github repository containing application code

Walkthrough Video: 
A walkthrough video that demonstrates the funcationity of the Team Profile Generator passing tests
A link to the vide should be included in README file
* demonstrate how a user would invoke the application from the command line
* How a user would enter responses to all of the prompts in the application
* Demonstrate a generated HTML file that matches user input

Technical Reqs
* Inquirer package
* Jest Package

Submit:
1.) Walkthrough video
2.) Sample HTML file generated using application
3.) URL of github repository 
4.) README describing project 


*/