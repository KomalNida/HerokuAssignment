const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = { type: String, required: true };

const reqNumber = { type: Number, required: true };

const reqDate = { type: Date, required: true };

const MainSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  Repair_date: reqDate,
  Repair_part: reqString,
});

module.exports = mongoose.model("Maintenance", MainSchema);
