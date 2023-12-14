module.exports = {
    development: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "BracoBalto//2323",
        database: "mydatabase",
        logging: false
    },
    test: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "",
        database: "testdatabase",
        logging: false
    },
    production: {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "",
        database: "productiondatabase",
        logging: false
    }
};
