const fs = require("fs-extra");
const multer = require("multer");
const config = require("../../../config");

const maxSize = 5 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
        try {
            const folder = req.body.name.trim();
            let path = `${config.uploadPath}${folder}`;
            let name = file.originalname.replace(/ /g, "-");
            let fileExist = await fs.pathExists(path + "/" + name);

            if (fileExist)
                return cb(new Error(`Файл ${file.originalname} уже загружен`));
            let pathExist = await fs.pathExists(path);
            if (!pathExist)
                await fs.ensureDir(path);
            await cb(null, path);
        } catch (err) {
            console.log("ERROR during SETTING PATH - ", err);
        }
    },
    filename: async (req, file, cb) => {
        try {
            let fileName = file.originalname.replace(/ /g, "-");
            await cb(null, fileName);
        } catch (err) {
            console.log("ERROR during SETTING NAME - ", err);
        }
    }
});

const filter = (req, file, cb) => {
    if (file.mimetype !== "application/pdf" && file.mimetype !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && file.mimetype !== "text/plain" && file.mimetype !== "application/msword")
        return cb(new Error("Возможно только - .pdf, .doc/.docx, .txt"));
    cb(null, true);
};


const upload = multer({
    storage: storage,
    fileFilter: filter,
    limits: {
        fileSize: maxSize
    }
});
const uploader = upload.array("files", 10);

module.exports = uploader;