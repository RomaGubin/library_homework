"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const file_1 = __importDefault(require("../middleware/file"));
const router = express_1.default.Router();
router.post('/upload', file_1.default.single('file'), (req, res) => {
    if (req.file) {
        const { path, originalname } = req.file;
        req.uploadedFileInfo = { path, originalname };
        res.json({ message: 'File uploaded successfully' });
    }
    else {
        res.status(400).json({ error: 'File not uploaded' });
    }
});
exports.default = router;
