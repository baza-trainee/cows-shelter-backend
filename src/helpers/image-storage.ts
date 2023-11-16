import fs from 'fs';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

type ValidMimeType = 'image/png' | 'image/jpg' | 'image/jpeg' | 'image/webp';

const validMimeTypes: ValidMimeType[] = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/webp',
];

export const saveImageToStorage = {
  storage: diskStorage({
    destination: 'uploads/images',
    filename(req, file, callback) {
      const fileExtension: string = file.originalname.split('.')[1];
      const fileName: string = uuidv4() + '.' + fileExtension;
      callback(null, fileName);
    },
  }),
  fileFilter: (req, file, callback) => {
    const allowedMimeTypes: ValidMimeType[] = validMimeTypes;
    allowedMimeTypes.includes(file.mimetype)
      ? callback(null, true)
      : callback(null, false);
  },
};

export const removeImage = (fullFilePath: string): void => {
  try {
    fs.unlinkSync(fullFilePath);
  } catch (error) {
    console.error(error);
  }
};