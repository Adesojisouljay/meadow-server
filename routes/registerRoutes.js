import express from "express";
import { createRegistration, getRegistrations } from "../controllers/register.js";

const router = express.Router();

router.post("/", createRegistration);
router.get("/", getRegistrations);

export default router;
