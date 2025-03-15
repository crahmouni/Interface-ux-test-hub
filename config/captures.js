const express = require("express");
const Capture = require("../models/capture.model");
const Comment = require("../models/comment.model");
const router = express.Router();

// Ruta para agregar un comentario a una captura
router.post("/captures/:captureId/comments", async (req, res) => {
  try {
    const { captureId } = req.params;
    const { text, user } = req.body;

    // Crear un nuevo comentario
    const newComment = new Comment({
      text,
      user,
      capture: captureId,
    });

    // Guardar el comentario en la base de datos
    await newComment.save();

    // Agregar el comentario a la captura
    const capture = await Capture.findById(captureId);
    capture.comments.push(newComment);
    await capture.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error al agregar comentario:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Otras rutas de capturas pueden ir aquí, si es necesario

module.exports = router;
