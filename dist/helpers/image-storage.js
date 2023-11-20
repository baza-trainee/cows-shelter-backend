"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeImage = exports.saveImageToStorage = void 0;
const fs_1 = require("fs");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const validMimeTypes = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/webp',
];
exports.saveImageToStorage = {
    storage: (0, multer_1.diskStorage)({
        destination: 'tmp/uploads/images',
        filename(req, file, callback) {
            const fileExtension = file.originalname.split('.')[1];
            const fileName = (0, uuid_1.v4)() + '.' + fileExtension;
            callback(null, fileName);
        },
    }),
    fileFilter: (req, file, callback) => {
        const allowedMimeTypes = validMimeTypes;
        allowedMimeTypes.includes(file.mimetype)
            ? callback(null, true)
            : callback(null, false);
    },
};
const removeImage = (fullFilePath) => {
    try {
        fs_1.default.unlinkSync(fullFilePath);
    }
    catch (error) {
        console.error(error);
    }
};
exports.removeImage = removeImage;
//# sourceMappingURL=image-storage.js.map