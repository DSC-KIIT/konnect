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

async function getAllPositions(key: string) {
    let connection, collection, res, doc, arr;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        doc = await collection.find().key(key).getOne();
        res = doc.getContent();
        arr = res.positions;
    } catch (err) {
        console.error(err);
    }
    if (connection) {
        try {
            await connection.close();
        } catch (err) {
            console.error(err);
        }
    }
    return arr;
}

export default getAllPositions;
