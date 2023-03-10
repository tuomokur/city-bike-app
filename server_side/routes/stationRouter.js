import express from "express";
import { saveStations } from "../controllers/stationController.js";
// import { controller functions here }

const router = express.Router();

router.get("/", saveStations);
// router.get("/:id", getStation);

export default router;