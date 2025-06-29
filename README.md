[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/PhOr2cd3)
[![Open in Visual Studio
Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8359730&assignment_repo_type=AssignmentRepo)
<section>
    <h1>HW6 - Testing</h1>
    <h3>Points: 20</h3>
    <br>
    <img src="https://cdn.freebiesupply.com/logos/large/2x/mocha-1-logo-png-transparent.png" alt="Mocha Logo"
        height="70">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png" alt="Cypress Logo"
    style="padding-left:20%"
        height="70">
    <h3>Course Learning Outcomes</h3>
    <ol style="margin: 0;">
        <li>Utilize the basic characteristics and components of web browsers and servers</li>
    </ol>
    <ol start="4" style="margin:0">
        <li>Implement server-side application logic using a back-end framework</li>
    </ol>
    <ol start="6" style="margin:0">
        <li>Integrate multiple web technologies into a single application to support front-end, backend, and database development</li>
        <li>Read and apply web standards</li>
        <li>Apply continuous integration to develop an application within a workflow or deployment pipeline</li>
    </ol>
</section>

<section>
    <h3>Your Website Description</h3>
    This assignment provides opportunities to use Nodejs and libraries to test your web application. Now that you have implemented a website with front-end and back-end throughout the individual HW, you should test it, of course!
    <h2>Website Requirements</h2>
    <p>The last piece of your individual HW
        is to <strong>implement testing using NodeJS and any testing libraries such as Mocha, Jest, Cypress, Selenium, etc.</strong>! 
        You must complete the following testing expectations below.</p>
    <p>
        Create <b>at least 3 unit tests</b> for any of your existing back-end features such as:
    </p>
    <ul>
        <s><li>Database CRUD operations</li></s>
        <li>User authentication or authorization</li>
        <li>3rd-Party API calls</li>
        <li>Server File I/O</li>
        <s><li>Etc.</li></s>
    </ul>
    <p>
        Create <b>at least 2 end-to-end tests</b> for any of your existing front-end features such as:
    </p>
    <ul>
        <li>User sign up or login</li>
        <s><li>Site route navigation</li></s>
        <s><li>Interaction with components</li></s>
        <li>Persistent user sessions</li>
        <s><li>Etc.</li></s>
    </ul>
    <p>
        You may use any packages and tools for NodeJS that help to test your website.
        You are welcome to utilize tools that we did not cover in class. 
    </p>
    <p>
        Please <b>create an NPM script "test"</b> that will start your server and run the tests for your application.
    </p>

</section>

<section>
    <h2>Best Practice and Git Requirements</h2>
    <p>Use <strong>best practice</strong> for all testing. Examples of best practice:
    </p>
    <ul>
        <li>Unit tests should not rely heavily on other tests to pass</li>
        <li>Use mocking when a test uses outside functions but does not rely on them.</li>
        <li>Use reliable selectors for client-side interaction with components (such as data-testid, etc.)</li>
        <li>Organize tests into appropriate groups/suites with well-named tests</li>
    </ul>
    <p>
        Use <strong>appropriate Git practice</strong> to complete the homework. Create a branch to work on each category of tests,
        and merge branches into main via a pull request. You may complete your own pull requests for this assignment.
    </p>
</section>

<section>
    <h2>Rubric and Submission</h2>
    <p>All homework assignments have an associated rubric attached to the grade on Brightspace.</p>
</section>

## Implemented Features

#### Testing Implemented
- Start server using `npm start`
- Run tests using `npm test`
    - Runs Mocha + Chai unit tests then Cypress E2E tests

#### Unit Testing
- Unit testing implemented using Mocha + Chai
- GET API routes tested
    - /api/health
    - /api/courses
    - /api/docs
    - /api/videos
    - /api/webapps
    - /api/docs/:docname
- POST API routes tested
    - /api/suggestions
        - Courses suggestion
- After hook used to clean database after POST

#### E2E Testing
- End-to-end testing implemented using Cypress
- Tested navbar navigation from and to EVERY nav page
    - 42 tests total
    - Home, Webapps, Videos, Courses, Documents, and Suggestions
    - Tested using navbar and home icon
- Tested form submission on suggestion page
    - 2 tests total
    - Tests submitting a suggestion (course tool-type)
    - Tests whether the suggestion appears in the browser on the courses page
- Used Cypress tasks to clean database after form submission