import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  slug:        { type: String, required: true, unique: true },
  title:       String,
  category:    String,
  client:      String,
  date:        String,
  tech:        [String],
  tagline:     String,
  description: String,
  problem:     String,
  solution:    String,
  results:     [String],
  gradientFrom:String,
  gradientTo:  String,
  published:   { type: Boolean, default: true },
}, { timestamps: true });

export const ProjectModel = mongoose.models.Project || mongoose.model('Project', schema);
