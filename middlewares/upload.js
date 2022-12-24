import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cd) {
        cb(null, '../uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now( + "--" + file.originalname))
    }
});

const fileFilter = (req, file, cb) => [
    if ((file.mimetype).includes('jpeg') || (file.mimetype))
].includes('png') {
    cb(null, true)
} else {
    cb(null, false)
};

let upload = multer({ storage: storage, fileFilter: fileFilter});

export default upload.single('SaucePicture')