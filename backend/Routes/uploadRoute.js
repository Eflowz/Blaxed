import express from 'express';
import upload from '../utils/multer.js';
import { uploadImage } from '../utils/uploadImage.js';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/products', upload.single('file'), async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      type,
      thc,
      potencyCBD,
      potencyTHC,
      brand,
      effects,
      subCategories,
      strainType,
      weight,
      featured,
      limited,
    } = req.body;

    const parsedEffects = (effects || '').split(',').filter(Boolean);
    const parsedSubCategories = (subCategories || '').split(',').filter(Boolean);

    let imageUrl = null;
    if (req.file) {
      const result = await uploadImage(req);
      imageUrl = result.secure_url;
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      type,
      thc,
      potencyCBD,
      potencyTHC,
      brand,
      effects: parsedEffects,
      subCategories: parsedSubCategories,
      strainType: strainType,
      weight,
      featured,
      limited,
      images: [imageUrl],
    });

    await product.save();

    res.status(201).json({
      message: 'Product added successfully!',
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding product' });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
