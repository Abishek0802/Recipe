const express = require("express");
const mongoose = require("mongoose");

// Create Express App
const app = express();

// MongoDB Connection URI
const MONGODB_URI = "mongodb://0.0.0.0:27017/appdatabase";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define Schema & Model (Optional)
// const Schema = mongoose.Schema;
// const YourSchema = new Schema({
//     // define your schema fields here
// });
// const YourModel = mongoose.model('YourModel', YourSchema);

// Express Route Example
app.get("/", (req, res) => {
  // Example: Fetching data from MongoDB
  // YourModel.find({}, (err, data) => {
  //     if (err) {
  //         console.error('Error fetching data:', err);
  //         res.status(500).send('Internal Server Error');
  //     } else {
  //         res.json(data);
  //     }
  // });
  res.send("Hello World!");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
