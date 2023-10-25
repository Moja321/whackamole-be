const mongoose = require("mongoose");

const molegameSchema = new mongoose.Schema({
  playername: { type: String },
  score: { type: Number },
});

// const origamiSchema = new mongoose.Schema({
//   posterid: { type: String },
//   name: { type: String },
//   likes: { type: Number },
//   title: { type: String },
//   img: { type: String },
//   description: { type: String },
//   reference: { type: String },
//   instructions: { type: String },
// });

const molegame = mongoose.model("molegame", molegameSchema);
module.exports = molegame;
