import mongoose from "mongoose";
const journeySchema = new mongoose.Schema({
    Departure: String,
    departureStation: String,
    Departure_station_id: String,
    returnStation: String,
    distance: Number,
    duration: Number
});

const JourneyModel = mongoose.model('journeys', journeySchema);
export default JourneyModel;