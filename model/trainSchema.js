import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String,
    departureTime: {
      Hours: Number,
      Minutes: Number,
      Seconds: Number,
    },
    seatsAvailable: {
      sleeper: Number,
      AC: Number,
    },
    price: {
      sleeper: Number,
      AC: Number,
    },
    delayedBy: Number,
  });

  const trainDetails = mongoose.model('trainDetail', trainSchema);

  export default trainDetails;