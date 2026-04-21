import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json())


app.get("/", (request, response) => {
    response.send("Welcome to my capstone!")
})

app.get("/status", (request, response) => {
    response.json({message: "Service healthy"})
})



const server = app.listen(PORT, () => console.log(`Listening on port ${server.address().port}`));

