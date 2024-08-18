import multer, { StorageEngine, File } from 'multer';
import { Request } from 'express';
//import { File } from 'multer'; // Типизация для файла

// Определение хранилища с типизацией
const storage: StorageEngine = multer.diskStorage({
  destination(req: Request, file: File, cb: (error: Error | null, destination: string) => void) {
    cb(null, 'books/file');
  },
  filename(req: Request, file: File, cb: (error: Error | null, filename: string) => void) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Экспорт настроенного multer
const fileMulter = multer({ storage });
export default fileMulter;