const express = require("express");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
require("./routes/api")(app);

//Handle Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
