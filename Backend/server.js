// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const { OpenAI } = require("openai");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const upload = multer();
// const api = "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"; // IMPORTANT: Remove your actual API key from here!
// const openai = new OpenAI({ apiKey: api });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Audio file handling
// const audioDir = path.join(__dirname, 'audio');
// if (!fs.existsSync(audioDir)) {
//   fs.mkdirSync(audioDir);
// }

// app.post("/api/voice-agent", upload.single("audio"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).send({ error: "No audio file provided" });
//     }

//     const buffer = req.file.buffer;
    
//     // Create a file-like object for Whisper API
//     const file = {
//       buffer,
//       name: "recording.webm",
//       type: req.file.mimetype
//     };

//     const transcription = await openai.audio.transcriptions.create({
//       file: file,
//       model: "whisper-1",
//     });

//     const chatResponse = await openai.chat.completions.create({
//       messages: [{ role: "user", content: transcription.text }],
//       model: "gpt-4",
//     });

//     const speech = await openai.audio.speech.create({
//       model: "tts-1",
//       input: chatResponse.choices[0].message.content,
//       voice: "nova",
//     });

//     const fileName = `response-${Date.now()}.mp3`;
//     const filePath = path.join(audioDir, fileName);
//     const bufferData = Buffer.from(await speech.arrayBuffer());
//     fs.writeFileSync(filePath, bufferData);

//     res.send({ 
//       audioUrl: `http://localhost:5000/audio/${fileName}`,
//       transcription: transcription.text,
//       response: chatResponse.choices[0].message.content
//     });
//   } catch (err) {
//     console.error("Voice agent error:", err);
//     res.status(500).send({ 
//       error: "Voice agent error",
//       details: err.message 
//     });
//   }
// });

// // Serve audio files
// app.use("/audio", express.static(audioDir));

// app.listen(5000, () => console.log("Voice agent running on http://localhost:5000"));