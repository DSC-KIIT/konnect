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

async function getActivity(key: string) {
    let connection, collection, res;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('activities');

        res = await collection.find().key(key).getOne();
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
    return res.getContent();
}

export default getActivity;
