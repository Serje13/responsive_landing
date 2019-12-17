
export const FIRST_NAME = "firstname";
export const PHONE = "phone";
export const EMAIL = "email";

const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phonePattern = /^[0-9]{6,13}$/;
const namePattern = /^[\u0400-\u04FFA-Za-z0-9@#\-.\s]+$/;

export const validateFields = (key, val) => {
    switch (key) {
        case FIRST_NAME: {
            if (!val) {
                return "Это обязательное поле!";
            }
            if (val.length > 50) {
                return "Должно быть не более 50 символов";
            }
            if (namePattern.test(val)) {
                return "";
            }
            return "Неверный формат";
        }
        case PHONE: {
            if (!val) {
                return "Это обязательное поле!";
            }
            if (phonePattern.test(val)) {
                return "";
            }
            return "Принимает только цифры!";
        }
        case EMAIL: {
            if (!val) {
                return "Это обязательное поле!";
            }
            if (val.length < 4) {
                return "Должно быть не менее 4 символов";
            }
            if (val.length > 100) {
                return "Должно быть не более 100 символов";
            }
            if (emailPattern.test(val)) {
                return "";
            }
            return "Неверный формат";
        }
        default: {
            throw new Error("Не поддерживаемый формат ввода!");
        }
    }
};

const maxSelectFile = (files) => {
    try {
        if (files.length > 3) {
            const msg = "Возможно загрузить только 3 файла одновременно";
            return msg;
        }
        if (files.length < 1) {
            const msg = "Это обязательное поле";
            return msg;
        }
        return "";
    } catch (err) {
        console.log(err);
    }
};

const checkMimeType = (files) => {
    try {
        let err = "";
        const types = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/msword"];
        for (let x = 0; x < files.length; x++) {
            if (types.every(type => files[x].type !== type)) {
                err = "Возможно только - .pdf, .doc/.docx, .txt";
            }
        }
        if (err !== "") {
            return err;
        }
        return err;
    } catch (err) {
        console.log(err);
    }
};

const checkFileSize = (files) => {
    try {
        const size = 1024 * 1024 * 5;
        let err = "";
        for (let x = 0; x < files.length; x++) {
            if (files[x].size > size) {
                err = "Файл не должен быть больше 5МБ";
            }
        }
        if (err !== "") {
            return err;
        }
        return err;
    } catch (err) {
        console.log(err);
    }
};
export const filesValidate = files => {
    try {
        let res = "";
        const quantity = maxSelectFile(files);
        const size = checkFileSize(files);
        const type = checkMimeType(files);
        if (quantity === "" && size === "" && type === "") {
            return res;
        }
        if (quantity !== "") {
            return res = quantity;
        } else if (size !== "") {
            return res = size;
        } else if (type !== "") {
            return res = type;
        }
        return res;
    } catch (err) {
        console.log(err);
    }
};