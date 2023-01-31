import express from "express";

const router = express.Router();

router.get("/", getAllJourneys);

export default router;