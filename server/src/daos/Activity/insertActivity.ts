const oracledb = require('oracledb');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

import { IActivity } from '@entities/Activity';

const dbConfig = {
    user: process.env.NODE_ORACLEDB_USER,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
};

oracledb.autoCommit = true;

async function insertActivity(username: string, activity: IActivity) {
    let connection, collection, res, doc;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('activities');

        doc = await collection.find().filter({ username: username }).getOne();
        res = doc.getContent();
        activity.id = uuidv4();
        res.activities.push(activity);

        await collection.find().key(doc.key).replaceOne(res);
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
