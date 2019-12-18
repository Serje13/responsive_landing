const uploader = require("../modules/uploader/index");
const multer = require("multer");
const fs = require("fs-extra");
const config = require("../../config");


const main = async (req, res) => {
    try {
        await uploader(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                if (err.code === "LIMIT_FILE_SIZE")
                    return res.status(400).send({ message: "Файл не должен быть больше 5Мб" });
                return res.status(400).send({ message: err.message });
            }
            else if (err)
                return res.status(400).send({ message: err.message });
            console.log("REQ DATA - ", req.body);
            res.status(200).send({
                message: "Ваши данные успешно отправлены!"
            });
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
};

module.exports = {
    main
};