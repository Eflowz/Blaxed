import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String }],  
  price: { type: Number, required: true },
  type: { type: String, required: true },
  thc: { type: String },
  desc: { type: String },
  description: { type: String },
  category: { type: String },
  concentrates: { type: Boolean },
  potencyCBD: { type: String },
  potencyTHC: { type: String },
  brand: { type: String },
  effects: [String],  
  subCategories: [String],  
  strainType: { type: String },  
  weight: { type: String },
  featured: { 
    type: String,
    enum: ['','Staff Pick','Specials', 'Best Seller'],
    default: ''
  },
  limited: { 
    type: Boolean,
    default: false 
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
