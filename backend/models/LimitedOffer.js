import mongoose from 'mongoose';

const limitedOfferSchema = new mongoose.Schema({
  endDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('LimitedOffer', limitedOfferSchema);
