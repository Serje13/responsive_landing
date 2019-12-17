const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const logger = require("morgan");
const config = require("./config");
const main = require("./api/routes/main");
// const dbConnect = require("./db");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

// dbConnect();

app.use((req, res, next) => {
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.sendStatus(200);
    }
    next();
});

app.use(cors());


app.use(bodyParser.urlencoded(
    {
        limit: "5mb", extended: false
    }
));

app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/uploads", express.static("uploads"));

app.use(main);

app.listen(config.port, () => {
    console.log(`App listening on port - ${config.port}`);
});
