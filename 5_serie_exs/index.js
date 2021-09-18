/*
Instituto Tecnológico de Aeronáutica
2º semestre - 2021
Professor Edgar Yano
Arthur José de Sousa Rodrigues COMP-23
Quinta série de exercícios
*/

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

function getAge(date){
    let yearOfBirthDate = new Date(date);
    let diff = Date.now() - yearOfBirthDate.getTime();
    let diffDate = new Date(diff);
    let year = diffDate.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age;
}

function addData(newData){
    let obj;
    let json;
    fs.readFile('table.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        obj.table.push(newData);
        json = JSON.stringify(obj);
        fs.writeFile('table.json', json, 'utf8', () => {});
    }});
}

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post("/registration", (req, res) => {
    console.log("Connected to React application");

    let age = getAge(req.body.date);
    if(age >= 18){
        res.send("Você foi cadastrado!")
        addData(req.body);
    }
    else{
        res.send("Você não tem idade suficiente!")
    }
    //res.redirect("/");
})

app.listen(3000, () => {
    console.log("Running");
})
