const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Tahwissa",
    allowedFormats: ["jpeg", "png", "jpg","webp"],
  },
});
const profilestorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Tahwissa/Profile",
    allowedFormats: ["jpeg", "png", "jpg","webp"],
  },
});

module.exports = {
  cloudinary,
  storage,
  profilestorage
};
