import mongoose from 'mongoose';
const ProjectSchema = new mongoose.Schema({
  repoName: {
    type: String,
    required: true,
  },
  description: String,
  files:[{
    type:String
  }],
  readme:{
    type:String
  },
  collabrators:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  }],
  stars:Number
},{ timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);