const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name:{ type: String, required: true,unique:true },
  projectImage: {url :String, filename: String},
  projectInfo: {
    description: String,
    demoLinks: [{fileName:{type:String}, link:{type:String}}],
    projectLink: [{name:{type:String}, link:{type:String}}]
  },
  creators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  endorsements: Number,
  tags: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: Date.now },
  openForCollaboration:Boolean,
  ongoing: Boolean,
  feedbacks: [{
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: {
      rating: {type: Number, enum:[1,2,3,4,5]},
      text: String,
      timestamp: { type: Date, default: Date.now }
    }
  }],
  rating: {type: mongoose.Schema.Types.Decimal128},
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  issues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Issue' }]
});
  
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;