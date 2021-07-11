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

async function getOneActivity(username: string, key: string) {
    let connection, collection, res, doc, ob;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('activities');

        doc = await collection.find().filter({ username: username }).getOne();
        res = doc.getContent();
        let index = res.activities.findIndex(
            ({ id }: { id: string }) => id === key
        );
        ob = res.activities[index];
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
    return ob;
}

export default getOneActivity;
