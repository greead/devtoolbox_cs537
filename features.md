# HW5 Implemented Features
Alekzander Green <br>
CS 537

## Setup
To set things up, please do the following:
- Go into the frontend folder and run `npm install` to install build dependencies for the frontend.
- Go into the frontend folder and run `npm run build` to build the frontend distribution code.
- Go to the root folder and run `npm install` to install build dependencies for the backend.
- Go to the root folder and run `npm start` to start the backend server.

Once finished, the backend server should be open on port 8080. You shouldn't need to run the frontend dev server if everything works as expected, but in case it doesn't, you can go into the frontend folder and run `npm run dev` to start the frontend server as well.

## Serve files to the client
- Developed a REST API
- Multiple GET routes to get data to display in the React client
    - GET /api/courses
    - GET /api/videos
    - GET /api/webapps
    - GET /api/docs
- Another GET route to serve PDF files to the client
    - GET /api/docs/:docname

## Manipulate data in a database or data store
- Developed a simple database using SQLite3
    - I decided to use SQLite3 to avoid issues with being unable to access the data
    - To keep with my original intentions of using a No-SQL database, I set up SQLite to act as a document store; hat is to say, SQLite is set up using its JSON functionalities, however this didn't turn out to be necessary
- Multiple GET routes access the tables in the dictionary
    - GET /api/courses accesses the courses table
    - GET /api/videos accesses the videos table
    - GET /api/webapps accesses the webapps table
    - GET /api/docs accesses the docs table
- The /api/suggestions POST route adds the suggestions to the DB
    - The web tool, video, document, and courses suggestions are all implemented to do this
    - The other tool suggestion is not implemented

## Save and load files on the server file system
- Developed a route to upload files to the file system
    - POST /api/suggestions receives files and puts them in the database/docs folder
- Developed pages that load files from the file system
    - The documents page loads files from the file system during load