import fs from 'fs';
import path from "path";
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('users', 'root', 'BracoBalto//2323', {
    host: 'localhost',
    dialect: 'mysql',
    native: false
});

const basename = path.basename(__filename)

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '../models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.ts'))
    .forEach((file) => {
        // @ts-ignore
        modelDefiners.push(require(path.join(__dirname, '../models', file)))
    })
// @ts-ignore
modelDefiners.forEach(model => model(sequelize))

let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// @ts-ignore
sequelize.models = Object.fromEntries(capsEntries)

const { Photo, User } = sequelize.models

User.hasOne(Photo)

sequelize.authenticate()
    .then(() => console.log('connected'))
    .catch((error) => console.log(error))


export const sqlModels = sequelize.models

export const connection = sequelize


// module.exports = {
//     development: {
//         dialect: "mysql",
//         host: "localhost",
//         username: "root",
//         password: "BracoBalto//2323",
//         database: "users",
//         logging: false
//     },
//     test: {
//         dialect: "mysql",
//         host: "localhost",
//         username: "root",
//         password: "BracoBalto//2323",
//         database: "testdatabase",
//         logging: false
//     },
//     production: {
//         dialect: "mysql",
//         host: "localhost",
//         username: "root",
//         password: "BracoBalto//2323",
//         database: "productiondatabase",
//         logging: false
//     }
// };
