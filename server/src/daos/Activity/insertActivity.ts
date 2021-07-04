import { IActivity } from '@entities/Activity';
const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig = {
    user: process.env.NODE_ORACLEDB_USER,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
};

oracledb.autoCommit = true;

async function insertActivity(activity: IActivity) {
    let connection, collection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('activities');

        collection.insertOne(activity);
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
}

export default insertActivity;
