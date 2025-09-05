import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    phone: { type: String },
    church: { type: String },
    event: { type: String, default: "Invasion 2025" },
  },
  { timestamps: true }
);

export default mongoose.model("RegisterInvasion", registerSchema);
