const mongoose = require("mongoose");

const HttpError = require("../utils/http-error");
const Admin = require("../models/admin");
const Destination = require("../models/destinations");

exports.adminSignup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const createAdmin = new Admin({
    firstname,
    lastname,
    email,
    password,
  });

  try {
    await createAdmin.save();
    res.json({ message: "Admin signed up" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }
};

exports.adminLogin = (req, res) => {
  let { email, password } = req.body;
  Admin.findOne({ email: email })
    .then((admin) => {
      console.log(admin);
      console.info(`admin with email : ${email} was found successfully`);

      if (password === admin.password) {
        console.info("login successful");
        return res.status(200).send(admin);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`admin with ${email} does not exist`);
      return res.status(404).send(`admin with ${email} does not exist`);
    });
};

exports.destinationAdd = async (req, res, next) => {
  const { name, description } = req.body;

  const createDestination = new Destination({
    name,
    description,
  });

  try {
    await createDestination.save();
    res.json({ message: "Destination added" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Problem countered try again", 500);
    return next(error);
  }
};

exports.destinationDelete = (req, res, next) => {
  const name = req.body.name;
  Destination.findOneAndRemove(name, () => {
    try {
      res.json({ message: "Destination Deleted" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Problem countered, try again", 500);
      return next(error);
    }
  });
};
