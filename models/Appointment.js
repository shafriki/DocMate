import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorEmail: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  isAppointed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment =
  mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

export default Appointment;
