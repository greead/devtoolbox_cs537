import { defineConfig } from "cypress";
import sqlite3 from "sqlite3";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                "db:clean"() {
                    const db = new sqlite3.Database("./database/devtools.db")
                    let results = {}
                    db.run("DELETE FROM courses WHERE document ->> '$.name' == 'TEST' ", function (err) {
                        results.lastID = this.lastID
                        results.changes = this.changes
                        results.err = err
                        console.log("CLEANING DB\nLast ID:", this.lastID, "Changes:", this.changes, "Errors:", err)
                    })
                    db.close()
                    return results.changes > 0 
                }
            })
        },
    },
});
