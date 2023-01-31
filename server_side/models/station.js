import mongoose from "mongoose";
const stationSchema = new mongoose.Schema({
    stationName: String,
    stationAddress: String,
    totalDepartures: Number,
    totalReturns: Number
});

const StationModel = mongoose.model('stations', stationSchema);
export default StationModel;