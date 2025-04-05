import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["user", "doctor", "admin"],
    default: "user",
  },
  isPatient: {
    type: Boolean,
    default: false, // Defaults to false, meaning the user is not a patient unless specified
  },
  doctorCvUrl: {
    type: String,
    default: "",
  },
  doctorImageUrl: {
    type: String,
    default: "",
  },
  doctorCategory: {
    type: String,
    enum: ["general", "cardiology", "dermatology", "neurology", "pediatrics", "other"],
  },
  
  appliedDoctor: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
