import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  slug:        { type: String, required: true, unique: true },
  title:       String,
  excerpt:     String,
  content:     String,
  author:      String,
  authorRole:  String,
  date:        String,
  readTime:    String,
  category:    String,
  tags:        [String],
  gradientFrom:String,
  gradientTo:  String,
  published:   { type: Boolean, default: true },
}, { timestamps: true });

export const BlogPostModel = mongoose.models.BlogPost || mongoose.model('BlogPost', schema);
