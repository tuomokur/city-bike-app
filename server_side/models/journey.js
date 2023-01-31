import mongoose from "mongoose";
const journeySchema = new mongoose.Schema({
    departureStation: String,
    returnStation: String,
    distance: Number,
    duration: Number
});

const JourneyModel = mongoose.model('journeys', journeySchema);
export default JourneyModel;