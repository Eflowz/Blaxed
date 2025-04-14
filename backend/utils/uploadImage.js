import cloudinary from './cloudinary.js';
import streamifier from 'streamifier';

// This function uploads image to Cloudinary and returns the result
export const uploadImage = async (req) => {
  try {
    const file = req.file;

    if (!file) {
      throw new Error('No file uploaded');
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'Blasted',  
            resource_type: 'image',
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    return await streamUpload();
  } catch (error) {
    throw new Error(error.message);
  }
};
