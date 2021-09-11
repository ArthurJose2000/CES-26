/*
Instituto Tecnológico de Aeronáutica
2º semestre - 2021
Professor Edgar Yano
Arthur José de Sousa Rodrigues COMP-23
Quarta série de exercícios
*/



const PORT = 3000;
const express = require('express');
const path = require('path');
const multer = require("multer");
const cors = require('cors');
const { time } = require('console');

const app = express();
app.set('view engine', 'ejs');
app.use(cors());

//app.use("mysite", express.static(path.join(__dirname, 'client')));


const fileStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "uploads");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }

})

const upload = multer({ storage: fileStorage });


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/ajax", (req, res) => {
    let data = {
        header: 'Título',
        paragraph: 'Este é o novo parágrafo.'
    }

    res.send(data);
})

app.get("/convert", (req, res) => {
    let time_min = parseInt(req.url.split("conversion=")[1]);
    res.send(time_min.toString() + " minutos equivalem a " + (time_min * 60).toString() + " segundos.");
})

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("Arquivo recebido");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})