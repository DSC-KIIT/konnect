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

async function getKey(email: string) {
    let connection, collection, res;
    let keys: string[] = [];

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        res = await collection.find().filter({ email: email }).getDocuments();
    } catch (err) {
        console.error(err);
    }
    res.forEach(function (element: any) {
        const content = element.key;
        keys.push(content);
    });
    if (connection) {
        try {
            await connection.close();
        } catch (err) {
            console.error(err);
        }
    }
    return keys[0];
}

export default getKey;
