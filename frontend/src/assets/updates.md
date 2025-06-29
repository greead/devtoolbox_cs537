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
