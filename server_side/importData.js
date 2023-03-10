import fs from 'fs';
import csv from 'csv-parser';
import StationModel from './models/station.js';
import JourneyModel from './models/journey.js';


export const createStationData =   () => {
  fs.createReadStream("./data/stations.csv")
    .pipe(csv())
    .on("data", (data) => {
      StationModel.create(data)
    })
};

const createJourneyData =   () => {
  const result = [];
  fs.createReadStream("./data/2021-05.csv")
    .pipe(csv())
    .on("data", (data) => {
      result.push(data)
      JourneyModel.create(data)
    })
    .on("end", () => {
      console.log('testitesti');
    })
};

export default createJourneyData;







