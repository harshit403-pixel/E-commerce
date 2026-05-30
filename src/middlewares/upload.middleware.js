import multer from "multer";


// configuring storage
const storage = multer.diskStorage({

  // uploads folder destination
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // custom filename
  filename: (req, file, cb) => {

    // adding current timestamp to avoid duplicate names
    cb(null, Date.now() + "-" + file.originalname);
  },
});


// multer middleware
const upload = multer({
  storage,
});

export default upload;