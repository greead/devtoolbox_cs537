// Imports
import { use, expect } from 'chai';
import chaiHttp, { request } from 'chai-http';
import sqlite3 from "sqlite3";

// Set up chai-http
use(chaiHttp);
const testUrl = "http://localhost:8080";

describe("API GET Routes", () => {

    describe("# Route /api/health", () => {
        const route = "/api/health"

        it("should return status 200 and message 'OK'", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.a.property("message", "OK");
                    done(err);
                });
        });
    });

    describe("# Route /api/courses", () => {
        const route = "/api/courses"

        it("should return status 200 and multiple courses", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res, "status is 200").to.have.status(200);
                    expect(res.body, "body is a non-empty array").to.be.an("array").that.is.not.empty;
                    expect(res.body[0], "item in array is a non-empty object").to.be.an("object").that.is.not.empty;
                    done(err);
                });
        });
    });

    describe("# Route /api/docs", () => {
        const route = "/api/docs"

        it("should return status 200 and multiple documents", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res, "status is 200").to.have.status(200);
                    expect(res.body, "body is a non-empty array").to.be.an("array").that.is.not.empty;
                    expect(res.body[0], "item in array is a non-empty object").to.be.an("object").that.is.not.empty;
                    done(err);
                });
        });
    });

    describe("# Route /api/videos", () => {
        const route = "/api/videos"

        it("should return status 200 and multiple videos", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res, "status is 200").to.have.status(200);
                    expect(res.body, "body is a non-empty array").to.be.an("array").that.is.not.empty;
                    expect(res.body[0], "item in array is a non-empty object").to.be.an("object").that.is.not.empty;
                    done(err);
                });
        });
    });

    describe("# Route /api/webapps", () => {
        const route = "/api/webapps"

        it("should return status 200 and multiple webapps", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res, "status is 200").to.have.status(200);
                    expect(res.body, "body is a non-empty array").to.be.an("array").that.is.not.empty;
                    expect(res.body[0], "item in array is a non-empty object").to.be.an("object").that.is.not.empty;
                    done(err);
                });
        });
    });

    describe("# Route /api/docs/:docname; docname = emmet_ref.pdf", () => {
        const route = "/api/docs/emmet_ref.pdf"

        it("should return status 200 and a pdf", done => {
            request.execute(testUrl)
                .get(route)
                .end((err, res) => {
                    expect(res, "status is 200").to.have.status(200);
                    expect(res, "response is pdf").to.have.property("type", "application/pdf");
                    done(err);
                });
        });

        
    });
});

describe('API POST Routes', () => {



    describe('# Route /api/suggestions new course', () => {
        const route = "/api/suggestions"

        after("Clean DB course table", () => {
            const db = new sqlite3.Database("./database/devtools.db")
            db.run("DELETE FROM courses WHERE document ->> '$.name' == 'TEST' ", function(err) {
                console.log("CLEANING DB\nLast ID:", this.lastID, "Changes:", this.changes, "Errors:", err)
            })
            db.close()
        })
        it("should post a new course", done => {
            const data = new FormData();
            data.append("tool_name", "TEST")
            data.append("tool_type", "course")
            data.append("description", "TEST DESCRIPTION")
            data.append("tool_url", "TEST_URL")


            request.execute(testUrl)
                .post(route)
                .type("form")
                .send({
                    "tool_name": "TEST",
                    "tool_type": "course",
                    "description": "TEST DESCRIPTION",
                    "tool_url": "TEST_URL"
                })
                .end((err, res) => {
                    expect(res, "status is 201").to.have.status(201);
                    done(err);
                });
        })
    })

    
})
