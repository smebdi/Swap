/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const process = require("process");
const cors = require('cors');

const app = express();
app.enable("trust proxy");
app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../../dist/angular6-example")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.post("/api/iwantit", (req, res) => {
    console.log(res)
    res.status(200).send('iknowudo')
})

app.post("/api/icangetit", (req, res) => {
    console.log(res)
    res.status(200).send('yeahbutwillu')
})

app.post("/api/ihaveit", (req, res) => {
    console.log(res)
    res.status(200).send('noudont')
})

app.post("/#/api/iwantit", (req, res) => {
    console.log('brokenhashbullshit')
    res.status(200).send('brokenhashbullshit')
})

app.post("/#/api/icangetit", (req, res) => {
    console.log('brokenhashbullshit')
    res.status(200).send('brokenhashbullshit')
})

app.post("/#/api/ihaveit", (req, res) => {
    console.log('brokenhashbullshit')
    res.status(200).send('brokenhashbullshit')
})

app.get('')


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// anything above this line is exported
module.exports = app;
