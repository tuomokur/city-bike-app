import express from 'express';
import mongoose from 'mongoose';
import journeyRouter from './routes/journeyRouter.js';
import stationRouter from './routes/stationRouter.js';
import createJourneyData from './importData.js';

const app = express();
const PORT = 3001;

async function connectMongoose() {
    await mongoose.connect("mongodb://localhost:27017/CityBike",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    // await createStationData();
    await createJourneyData();
}

connectMongoose();

app.use("/journey", journeyRouter);
// app.use("/station", stationRouter);

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});