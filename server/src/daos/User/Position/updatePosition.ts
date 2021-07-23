const oracledb = require('oracledb');
require('dotenv').config();

import { IPosition } from '@entities/Position';

const dbConfig = {
    user: process.env.NODE_ORACLEDB_USER,
    password: process.env.NODE_ORACLEDB_PASSWORD,
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
};

oracledb.autoCommit = true;

async function updatePosition(key: string, position: IPosition) {
    let connection, collection, res, doc;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        doc = await collection.find().key(key).getOne();
        res = doc.getContent();
        let index = res.activities.findIndex(
            ({ id }: { id: string }) => id === position.id
        );
        res.activities[index] = position;

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

export default updatePosition;
