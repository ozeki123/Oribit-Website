import Image from "../models/Image";

imageRouter.post('/', async(req, res) => {
  const uploadedImage = new Image({
    image: req.file.path
  });

  try{
    await uploadedImage.save();
  } catch(err) {
    return res.status(400).json(err);
  }
})