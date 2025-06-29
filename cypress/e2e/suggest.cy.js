

describe('test suggestions', () => {

    it('should add a course', () => {
        cy.visit('http://localhost:8080/suggestions')
        cy.get('#tool-type').select("course")
        cy.get('#tool-name').type("TEST")
        cy.get('#tool-url').type("http://testurl.com")
        cy.get('#description').type("TEST DESCRIPTION")
        cy.get('#submit').click()
        cy.get('table').contains("TEST")
    })

    it('should display course', () => {
        cy.visit('http://localhost:8080/courses')
        cy.contains("h3", "TEST")
        cy.task("db:clean")
    })

    // after("Clean DB course table", () => {
    //     const sqlite3 = require('../sqlite3')
    //     const db = new sqlite3.Database("./database/devtools.db")
    //     db.run("DELETE FROM courses WHERE document ->> '$.name' == 'TEST' ", function (err) {
    //         console.log("CLEANING DB\nLast ID:", this.lastID, "Changes:", this.changes, "Errors:", err)
    //     })
    //     db.close()
    // })
})