"use strict";
module.exports = {
    development: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "BracoBalto//2323",
        database: "users",
        logging: false
    },
    test: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "BracoBalto//2323",
        database: "testdatabase",
        logging: false
    },
    production: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "BracoBalto//2323",
        database: "productiondatabase",
        logging: false
    }
};
