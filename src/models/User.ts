
import mongoose, { Schema, model, models } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    default: null,
    select: false, 
  },
  role: {
    type: String,
    default: "user", 
    enum: ["user", "admin", "moderator"], 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  updatedAt: {
    type: Date,
    default: Date.now, 
  },
  image:{
    type:String,
     default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  }
});

export const MyEventUser =
  models?.MyEventUser || model("MyEventUser", userSchema);