import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  lastMessage: {
    content: String,
    createdAt: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Chat || mongoose.model('Chat', chatSchema);