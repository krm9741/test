const express = require("express");
const router = express.Router();
const User = require("../Module/UserSchema");


// ==========================
// SIGNUP API
// ==========================

router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password, mobile, city, stateName, zip } = req.body;

    const newUser = new User({
      Name: firstname + " " + lastname,
      Password: password,
      Emailid: email,
      Mobilenumber: mobile,
      City: city,
      State: stateName,
      Zip: zip
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: savedUser
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error.message
    });
  }
});


// ==========================
// LOGIN API
// ==========================
router.post("/login", async (req, res) => {
  try {
    console.log(req.body.email+req.body.password)
    const user = await User.findOne({
      Emailid: req.body.email,
      Password: req.body.password
    });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;