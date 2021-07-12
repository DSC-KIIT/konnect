import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const port = Number(process.env.PORT || 3000);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'konnect backend API',
            version: '1.0.0',
            description: 'A simple Express API',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
// Start the server

app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
