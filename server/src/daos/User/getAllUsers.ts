const oracledb = require('oracledb');
require('dotenv').config();
import { IUser } from '@entities/User';

const dbConfig = {
    user: process.env.NODE_ORACLEDB_USER,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
};

oracledb.autoCommit = true;

async function getAllUsers() {
    let connection, collection, res;
    let documents: IUser[] = [];

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        res = await collection
            .find()
            .filter({ username: { $regex: '.*.*' } })
            .getDocuments();
    } catch (err) {
        console.error(err);
    }
    res.forEach(function (element: any) {
        const content = element.getContent();
        documents.push(content);
    });
    if (connection) {
        try {
            await connection.close();
        } catch (err) {
            console.error(err);
        }
    }
    return documents;
}

export default getAllUsers;
