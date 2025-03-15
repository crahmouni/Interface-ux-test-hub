const mongoose = require("mongoose");

const CaptureSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // Asociar la captura al usuario (puedes ampliar con otros campos si es necesario)
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Capture", CaptureSchema);
