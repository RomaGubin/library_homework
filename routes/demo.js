const express = require('express')
const router = express.Router()
const fileMulter = require('../middleware/file')
//const { v4: uuid } = require('uuid');
//const Book = require('../index');

router.post('/upload', 
fileMulter.single('file'), (req, res) => {
  if (req.file) {
    const { path, originalname } = req.file;
    req.uploadedFileInfo = { path, originalname };
    res.json({ message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ error: 'File not uploaded' });
  }
});

module.exports = router;