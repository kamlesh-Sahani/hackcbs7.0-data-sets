import { time } from 'console';
import mongoose from 'mongoose';


const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
 timer:{
   type:String
 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);