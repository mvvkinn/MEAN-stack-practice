import { InterfaceUser } from "@/interfaces/user";
import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
  },
  email: {
    type: String,
    unique: true,
    index: true,
  },

  password: String,
});

export default mongoose.model<InterfaceUser & mongoose.Document>("User", User);
