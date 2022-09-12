const mongoose = require("mongoose");

type connectDBPProps = {
  url: string;
};

const connectDB = (url: connectDBPProps) => {
  return mongoose.connect(url).then(() => console.log(`Connected to MongoDB`));
};

module.exports = connectDB;
