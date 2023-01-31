import express from "express";

const router = express.Router();

router.get("/", getAllStations);
router.get("/:id", getStation);

export default router;