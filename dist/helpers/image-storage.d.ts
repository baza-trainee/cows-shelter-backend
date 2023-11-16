/// <reference types="multer" />
export declare const saveImageToStorage: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, callback: any) => void;
};
export declare const removeImage: (fullFilePath: string) => void;
