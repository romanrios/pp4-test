import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  description: String,
  image: String,
  createdBy: String,
}, { timestamps: true });

export default mongoose.models.Cat || mongoose.model("Cat", CatSchema);