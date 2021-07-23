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

async function run() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);

        // Create the parent object for SODA
        const soda = connection.getSodaDatabase();

        // Explicit metadata is used for maximum version portability.
        // Refer to the documentation.
        const md = {
            keyColumn: {
                name: 'ID',
            },
            contentColumn: {
                name: 'JSON_DOCUMENT',
                sqlType: 'BLOB',
            },
            versionColumn: {
                name: 'VERSION',
                method: 'UUID',
            },
            lastModifiedColumn: {
                name: 'LAST_MODIFIED',
            },
            creationTimeColumn: {
                name: 'CREATED_ON',
            },
        };

        // Create a new SODA collection and index
        // This will open an existing collection, if the name is already in use.
        let collection = await soda.createCollection('users', { metaData: md });
        let indexSpec = {
            name: 'user-email-index',
            fields: [{ path: 'email', datatype: 'string' }],
        };
        await collection.createIndex(indexSpec);

        collection = await soda.createCollection('activities', {
            metaData: md,
        });
        indexSpec = {
            name: 'activity-username-index',
            fields: [{ path: 'username', datatype: 'string' }],
        };
        await collection.createIndex(indexSpec);

        collection = await soda.createCollection('tags', { metaData: md });
        indexSpec = {
            name: 'tag-name-index',
            fields: [{ path: 'name', datatype: 'string' }],
        };
        await collection.createIndex(indexSpec);
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

run();
