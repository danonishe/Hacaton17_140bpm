import express from 'express';
import corsMiddleware from './middlewares/cors.js';
import cookieParser from 'cookie-parser';
import testUtils from './utils/test_data.js';
import dbUtils from './utils/db.js';

import authRoute from './routes/auth.js';
import placeRoute from './routes/place.js';
import favPlaceRoute from './routes/favPlace.js';


const app = express();

(async function initDb() {
    try {
        await dbUtils.initializeDbModels();
        await testUtils.createTestUsers();
    } catch (e) {
        console.log(e);
        console.log('COULD NOT CONNECT TO THE DB, retrying in 5 seconds');
        setTimeout(initDb, 5000);
    }

})();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(corsMiddleware);

app.use('/auth', authRoute);
app.use('/place', placeRoute);
app.use('/favPlace', favPlaceRoute);

app.listen(3000, () => console.log(`Listen on :${3000}`));