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


/* Minimum beer object
{   bid: 65644,
    beer_name: 'Pseudo Sue',
    beer_label: 'https://untappd.akamaized.net/site/beer_logos/beer-65644_7d104_sm.jpeg',
    beer_abv: 6.8,
    beer_ibu: 50,
    beer_description: 'This single hop pale ale showcases the Citra hop for a well balanced beer that is delicate in body with a mild bitterness in the finish. Ferocious hop aromas of citrus and mango give a refreshing taste that is bright with just enough bite!',
    style_name: 'Pale Ale - American' 
} 
*/