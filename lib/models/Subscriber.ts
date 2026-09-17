import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email:        { type: String, required: true, unique: true, lowercase: true, trim: true },
  unsubscribed: { type: Boolean, default: false },
}, { timestamps: true });

export const SubscriberModel = mongoose.models.Subscriber || mongoose.model('Subscriber', schema);
