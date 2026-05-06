

import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
    username: String,
    id: Number,
    isMember: Boolean,
    appointmentTime: Date,
})

const Assessment = mongoose.model("Assessment", assessmentSchema);

export default Assessment;
