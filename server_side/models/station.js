import mongoose from "mongoose";
const stationSchema = new mongoose.Schema({
    ID: String,
    Nimi: String,
    Osoite: String,
    totalDepartures: Number,
    totalReturns: Number
});
const StationModel = mongoose.model('stations', stationSchema);
export default StationModel;