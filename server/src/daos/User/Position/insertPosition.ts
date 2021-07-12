const oracledb = require('oracledb');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

import { IPosition } from '@entities/User';

const dbConfig = {
    user: process.env.NODE_ORACLEDB_USER,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
};

oracledb.autoCommit = true;

async function insertPosition(key: string, position: IPosition) {
    let connection, collection, res, doc;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        doc = await collection.find().key(key).getOne();
        res = doc.getContent();
        position.id = uuidv4();
        res.positions.push(position);

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

export default insertPosition;
