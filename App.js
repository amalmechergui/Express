const express = require("express");
const dotenv = require("dotenv");
const Routes = require("./Routes");
const { openTime } = require("./Middlewares");
const path = require("path");

const app = express();
dotenv.config();


app.use(openTime);
app.use(Routes);

app.get("/views/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "style.css"));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});





