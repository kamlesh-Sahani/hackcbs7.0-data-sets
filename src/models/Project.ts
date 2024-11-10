import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  name: String,
  path: String,
  content: String,
  type: String,
  size: Number,
  createdAt: { type: Date, default: Date.now },
});

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  technology: {
    type: String,
    required: true,
    enum: ['nextjs', 'react', 'python', 'typescript', 'other'],
  },
  files: [FileSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);