import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import assessments from "./Controllers/assessements.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

app.get("/", (request, response) => {
  response.send("Welcome to the Phase.ai API");
});

app.get("/status", (request, response) => {
  response.json({ message: "Service healthy" });
});
app.use("/assessments", assessments)

const server = app.listen(PORT, () =>
  console.log(`Listening on port ${server.address().port}`)
);
