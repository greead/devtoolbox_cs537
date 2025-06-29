function test_route(start_route, route_name) {

    function test_click(go_to, selector, new_url) {
        it(`should go to ${go_to}`, () => {
            cy.visit(start_route)
            cy.get(selector).click()
            cy.url().should("equal", new_url)
        })
    }

    describe(`Test all navbar routes from ${route_name}`, () => {
        test_click("home", '.site-nav > [href="/"]', "http://localhost:8080/")
        test_click("webapps", '.site-nav > [href="/web-tools"]', "http://localhost:8080/web-tools")
        test_click("videos", '.site-nav > [href="/videos"]', "http://localhost:8080/videos")
        test_click("courses", '.site-nav > [href="/courses"]', "http://localhost:8080/courses")
        test_click("documents", '.site-nav > [href="/docs"]', "http://localhost:8080/docs")
        test_click("suggestions", '.site-nav > [href="/suggestions"]', "http://localhost:8080/suggestions")
        test_click("home (logo-clicked)", 'header > a > img', "http://localhost:8080/")
    })
}

test_route("http://localhost:8080/", "home")
test_route("http://localhost:8080/web-tools", "web-tools")
test_route("http://localhost:8080/videos", "videos")
test_route("http://localhost:8080/courses", "courses")
test_route("http://localhost:8080/docs", "documents")
test_route("http://localhost:8080/suggestions", "suggestions")