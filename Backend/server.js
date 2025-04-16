const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
app.use(cors());
const port = 5000;

// Multer setup to accept audio file
const upload = multer({ dest: "uploads/" });

const OPENAI_API_KEY = "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";

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  const audioPath = req.file.path;

  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(audioPath));
    formData.append("model", "whisper-1");

    const response = await axios.post("https://api.openai.com/v1/audio/transcriptions", formData, {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        ...formData.getHeaders(),
      },
    });

    fs.unlinkSync(audioPath); // Clean up
    res.json({ transcription: response.data.text });
  } catch (error) {
    console.error("Whisper API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to transcribe" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
