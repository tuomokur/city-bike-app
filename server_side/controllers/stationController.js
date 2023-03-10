import StationModel from "../models/station.js";

// export const getAllStations = async(req, res) => {
    
// }

export const saveStations = async(req, res) => {
    const save = {
        stationName: "Pasila",
        stationAddress: "Pitkäkatu 5",
        totalDepartures: 30,
        totalReturns: 7
    }
    const newStation = new StationModel(save);
}