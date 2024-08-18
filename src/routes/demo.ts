import express, { Request, Response } from "express";
import fileMulter from "../middleware/file";

const router = express.Router();

// Расширяем интерфейс Request для добавления свойства uploadedFileInfo
interface MulterRequest extends Request {
  uploadedFileInfo?: {
    path: string;
    originalname: string;
  };
}

router.post('/upload', fileMulter.single('file'), (req: MulterRequest, res: Response) => {
  if (req.file) {
    const { path, originalname } = req.file;
    req.uploadedFileInfo = { path, originalname };
    res.json({ message: 'File uploaded successfully' });
  } else {
    res.status(400).json({ error: 'File not uploaded' });
  }
});

export default router;