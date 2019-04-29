/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const process = require("process");
const cors = require('cors');

const PORT = process.env.PORT || 8081;

var admin = require("firebase-admin");
var serviceAccount = require("./firebase-admin-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://djangular-front-end.firebaseio.com"
});
var db = admin.database();

const app = express();
app.use(cors());
app.enable("trust proxy");
app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "../../dist/djangular-front")));

// Begin routing
app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.get("/api/getuserdata/uid/:uid", (req, res) => {
  if (req.params.uid) {
    db.ref(`users/${req.params.uid}/username`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
  }
})

app.get("/api/getuserdata/username/:username", (req, res) => {
  if (req.params.username) {
    db.ref(`usernames/${req.params.username}`).once('value').then(function(snapshot) {
      console.log('passed username, returning user data')
      console.log(snapshot.val())
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
  }
})

app.get("/api/username/:username", (req, res) => {
  if (req.params.username) {
    db.ref(`usernames/${req.params.username}`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
  }
})

app.get("/api/getpublicuserid/username/:username", (req, res) => {
  if (req.params.username) {
    db.ref(`users`).orderByChild("username/username").equalTo(req.params.username).once('value').then(function(snapshot) {
      res.status(200).json(Object.keys(snapshot.val())[0])
    }, (err) => res.status(400).json(err.message))
  }
})

app.post("/api/editprofile/username/:username", (req, res) => {
  console.log('editing profile')
  console.log(req.body)

  if (req.body.description) {
    db.ref(`usernames/${req.params.username}`).update({
      description: req.body.description
    }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`descset`))
  }

  if (req.body.imageUrl) {
    db.ref(`usernames/${req.params.username}`).update({
      imageUrl: req.body.imageUrl
    }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`picset`))
  }
})


// bind username to authenticated user
app.post("/api/createuser/username/:username/uid/:uid", (req, res) => {
  console.log('creating user')
  var err1; var err2;
  
  console.log(req.params.username);
  console.log(req.params.uid);

  db.ref(`usernames/${req.params.username}`).set({
    username: req.params.username,
    uid: req.params.uid,
    imageUrl: 'https://djangular-front-end.appspot.com/assets/icons/1.png',
    description: 'This user has not told us anything about themselves yet. But we can assume they like beer!'
  }, (err) => { if (err) err1 = err });
  db.ref(`users/${req.params.uid}/username`).set({
    username: req.params.username
  }, (err) => { if (err) err2 = err });

  if (err1 || err2) {
    console.log(err1); console.log(err2);
    res.status(400).json(err1, err2)
  } else {
    res.status(200).json('success')
  }
})


/* WANTS */
app.get("/api/user/:userid/wants", (req, res) => {
  db.ref(`users/${req.params.userid}/wants`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.get("/api/beer/:bid/wants", (req, res) => {
  db.ref(`beer/${req.params.bid}/wants`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.post("/api/user/:userid/iwantit", (req, res) => {
  // transform into notification feed
  console.log(req.body)

  db.ref(`beer/${req.body.beer.bid}/wants/${req.body.username}`).set({
      uid: req.params.userid
  }, (err) => { if (err) console.log(err) })

  db.ref(`users/${req.params.userid}/wants/${req.body.beer.bid}`).set({
      bid: req.body.beer.bid,
      beer_label: req.body.beer.beer_label,
      beer_name: req.body.beer.beer_name,
      beer_style: (req.body.beer.beer_style) ? req.body.beer.beer_style : req.body.beer.style_name
  }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`iknowyoudo`)) 
})

/* CAN GETS */
app.get("/api/user/:userid/cangets", (req, res) => {
  db.ref(`users/${req.params.userid}/canget`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.get("/api/beer/:bid/cangets", (req, res) => {
  db.ref(`beer/${req.params.bid}/canget`).once('value').then(function(snapshot) {
      console.log(snapshot.val())
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.post("/api/user/:userid/icangetit", (req, res) => {
  // transform into notification feed
  console.log(`${req.params.userid} can get ${req.body.beer.bid}`)

  db.ref(`beer/${req.body.beer.bid}/canget/${req.body.username}`).set({
      uid: req.params.userid
  }, (err) => { if (err) console.log(err) })

  db.ref(`users/${req.params.userid}/canget/${req.body.beer.bid}`).set({
      bid: req.body.beer.bid,
      beer_label: req.body.beer.beer_label,
      beer_name: req.body.beer.beer_name,
      beer_style: (req.body.beer.beer_style) ? req.body.beer.beer_style : req.body.beer.style_name
  }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`yeahbutwillu`))  
    
})


/* HAS */
app.get("/api/user/:userid/has", (req, res) => {
  db.ref(`users/${req.params.userid}/has`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.get("/api/beer/:bid/has", (req, res) => {
  db.ref(`beer/${req.params.bid}/has`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.post("/api/user/:userid/ihaveit", (req, res) => {
  // transform into notification feed
  console.log(`${req.params.userid} has ${req.body.beer.bid}`)

  db.ref(`beer/${req.body.beer.bid}/has/${req.body.username}`).set({
      uid: req.params.userid
  }, (err) => { if (err) console.log(err) })

  db.ref(`users/${req.params.userid}/has/${req.body.beer.bid}`).set({
    bid: req.body.beer.bid,
    beer_label: req.body.beer.beer_label,
    beer_name: req.body.beer.beer_name,
    beer_style: (req.body.beer.beer_style) ? req.body.beer.beer_style : req.body.beer.style_name
  }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`noudont`))  

})


/* LIKES */
app.get("/api/user/:userid/likes", (req, res) => {
  db.ref(`users/${req.params.userid}/likes`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.get("/api/beer/:bid/likes", (req, res) => {
  db.ref(`beer/${req.params.bid}/likes`).once('value').then(function(snapshot) {
      res.status(200).json(snapshot.val())
    }, (err) => res.status(400).json(err.message))
})
app.post("/api/user/:userid/likebeer", (req, res) => {
  // transform into notification feed
  console.log(`${req.params.userid} liked ${req.body.beer.beer.bid}`)

  db.ref(`beer/${req.body.beer.beer.bid}/likes/${req.body.username}`).set({
      uid: req.params.userid
  }, (err) => { if (err) console.log(err) })

  db.ref(`users/${req.params.userid}/likes/${req.body.beer.beer.bid}`).set({
      bid: req.body.beer.beer.bid,
      beer_label: req.body.beer.beer.beer_label,
      beer_name: req.body.beer.beer.beer_name,
      brewery_name: req.body.beer.brewery.brewery_name
  }, (err) => (err) ? res.status(200).json(err.message) : res.status(200).json('kthx'))

})


/* MESSAGES */
app.post("/api/messages/user/:uid/send", (req, res) => {
  // transform into notification feed
  console.log(req.body)

  db.ref(`users/${req.params.uid}/messages`).push({
      read: 0,
      archived: 0,
      datetime: Date.now(),
      recipient: req.body.recipient,
      sender: req.body.sender,
      subject: req.body.subject,
      message: req.body.message
  }, (err) => (err) ? res.status(400).json(err.message) : res.status(200).json(`messagesent`)) 
})


//TODO handle archived
app.get("/api/messages/user/:uid/all", (req, res) => {
  db.ref(`users/${req.params.uid}/messages`).once('value').then(function(snapshot) {
    res.status(200).json(isNotArchived(snapshot.val()))
  }, (err) => res.status(400).json(err.message))
})

app.get("/api/messages/user/:uid/all/count", (req, res) => {
  db.ref(`users/${req.params.uid}/messages`).once('value').then(function(snapshot) {
    res.status(200).json(isNotArchived(snapshot.val()).length)
  }, (err) => res.status(400).json(err.message))
})

app.get("/api/messages/user/:uid/unread", (req, res) => {
  db.ref(`users/${req.params.uid}/messages`).orderByChild("read").equalTo(0).once('value').then(function(snapshot) {
    res.status(200).json(isNotArchived(snapshot.val()))
  }, (err) => res.status(400).json(err.message))
})

app.get("/api/messages/user/:uid/unread/count", (req, res) => {
  db.ref(`users/${req.params.uid}/messages`).orderByChild("read").equalTo(0).once('value').then(function(snapshot) {
    res.status(200).json(isNotArchived(snapshot.val()).length)
  }, (err) => res.status(400).json(err.message))
})

function isNotArchived(response) {
  return (response) ? 
    Object.keys(response).map((v) => {
      if (!response[v].archived) {
        return response[v]
      }
    }).filter((v) => v) : []
}


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

// anything above this line is exported
module.exports = app;