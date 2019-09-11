const mongoose = require("mongoose");

//DBConnection
const db_connect = mongoose.connect(
  "mongodb+srv://admin:yochi123@blug-6dxrs.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to db")
);

module.exports = db_connect;