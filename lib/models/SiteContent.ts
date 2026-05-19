import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  section: { type: String, required: true, unique: true },
  data:    { type: mongoose.Schema.Types.Mixed, required: true },
}, { timestamps: true });

export const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', schema);
