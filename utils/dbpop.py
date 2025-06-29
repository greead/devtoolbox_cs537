import sqlite3
import json
import os

# Create a sqlite3 connection
with sqlite3.connect("devtools.db") as con:
    # Open a cursor
    cur = con.cursor()

    jdir = os.listdir("./json_temp")

    # Open the file to read
    for filename in jdir:
        name = filename.split(".")[0]
        with open(f"./json_temp/{filename}") as file:
            # Load the json list
            print(filename)
            courses = json.load(file)

        # Create table
        cur.execute(f"DROP TABLE IF EXISTS {name}")
        con.commit()

        cur.execute(f"CREATE TABLE {name} (document TEXT)")
        con.commit()

        # Stringify content for insertion
        str_courses = [(json.dumps(course), ) for course in courses]

        # Add contents to db       
        cur.executemany(f"INSERT INTO {name} (document) VALUES (json(?))", str_courses)
        con.commit()

        # Check
        cur.execute(f"SELECT * FROM {name}")
        print(cur.fetchall())