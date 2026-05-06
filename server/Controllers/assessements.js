import { Router } from "express";
import Assessment from "../models/Assessments.js";

const router = Router();




router.get("/", async (request, response) => {
    response.send("Hello from the users router")
})

export default router;
