const mongoose = require("mongoose");

const HttpError = require("../utils/http-error");
const Destination = require("../models/destinations");

exports.searchDestination = (req, res) => {
  const {name} = req.body;
  Destination.findOne({ name: name })
    .then((destination) => {
      return res.status(200).send(destination);
    })
    .catch((err) => {
      const error = new HttpError("Destination not found", 200);
      throw error;
    });
};