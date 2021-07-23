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

async function getPosition(key: string, positionid: string) {
    let connection, collection, res, doc, ob;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const soda = connection.getSodaDatabase();
        collection = await soda.openCollection('users');

        doc = await collection.find().key(key).getOne();
        res = doc.getContent();
        let index = res.positions.findIndex(
            ({ id }: { id: string }) => id === positionid
        );
        ob = res.positions[index];
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

export default getPosition;
