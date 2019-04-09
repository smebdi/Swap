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

app.use(express.static(path.resolve(__dirname, "../../dist/djangular-front")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.post("/api/iwantit", (req, res) => {
    console.log(req.body.beer)
    res.status(200).json(`iknowyoudo`)
})

app.post("/api/icangetit", (req, res) => {
    console.log(req.body.beer)
    res.status(200).json(`yeahbutwillu`)
})

app.post("/api/ihaveit", (req, res) => {
    console.log(req.body.beer)
    res.status(200).json(`noudont`)
})

app.post("/api/:userid/likebeer", (req, res) => {
    console.log(req.params.userid)
    console.log(req.body.beer.beer)
    console.log(req.body.beer.brewery.brewery_name)
    console.log(req.body.beer.likes)

    res.status(200).json('kthx')
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// anything above this line is exported
module.exports = app;
