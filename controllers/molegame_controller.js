const express = require("express");
const router = express.Router();

const molegame = require("../models/molegame_schema.js");

router.get("/", async (req, res) => {
  try {
    res.json(await molegame.find().sort({ score : -1 }).limit(10));
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  // try {
  //   res.json(await molegame.create(req.body));
  // } catch (error) {
  //   res.status(400).json(error);
  // }

  molegame.create(req.body, (err,createdUser)=>{
    if (err) {
        //console.log(err.message)
        res.status(400).json(err);
    }else{
        console.log("Created user: " + createdUser.playername);
        //res.send(createdUser);
        res.send("Score submitted successfully!");
    }
  });
});

// router.put("/:id", async (req, res) => {
//   try {
//     res.json(
//       await origami.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     );
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     res.json(await origami.findByIdAndRemove(req.params.id));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

module.exports = router;
