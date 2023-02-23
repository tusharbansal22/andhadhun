const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://admin:admin@cluster0.a6czmy0.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};