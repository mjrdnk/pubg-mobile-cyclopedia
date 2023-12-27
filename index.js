const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to PUBG Mobile API!");
});

app.get("/api/maps", (req, res) => {
  setTimeout(() => {
    res.json([
      {
        id: 1,
        name: "Erangel",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh4s4PMpoAyr4CMC4DFlulGUN9QRoQTdYYCFEld4zVA&s",
      },
      {
        id: 2,
        name: "Miramar",
        imageUrl:
          "https://wstatic-prod.pubg.com/web/live/main_be3c5a6/img/b5c3c7f.jpg",
      },
      {
        id: 3,
        name: "Sanhok",
        imageUrl:
          "https://wstatic-prod.pubg.com/web/live/main_be3c5a6/img/3ab566e.jpg",
      },
      {
        id: 4,
        name: "Vikendi",
        imageUrl:
          "https://wstatic-prod.pubg.com/web/live/main_be3c5a6/img/1bee462.jpg",
      },
      {
        id: 5,
        name: "Livik",
        imageUrl:
          "https://liquipedia.net/commons/images/2/20/PUBG_Mobile_Livik.jpg",
      },
    ]);
  }, 2000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
