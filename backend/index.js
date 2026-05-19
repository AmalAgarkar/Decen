import express from "express";
import cors from "cors";
import multer from "multer";
import axios from "axios";
import dotenv from "dotenv";
import FormData from "form-data";

dotenv.config();

const app = express();

// ✅ allow React frontend
app.use(cors({
  origin: "http://localhost:3000"
}));

// ✅ file storage in memory (important)
const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // ❌ if file not received
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // ✅ create form for Pinata
    const formData = new FormData();

    formData.append(
      "file",
      req.file.buffer,
      req.file.originalname
    );

    // ✅ send to Pinata
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: Infinity,
        headers: {
          ...formData.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
        },
      }
    );

    // ✅ return CID to frontend
    return res.json({
      cid: response.data.IpfsHash,
    });

  } catch (err) {
    console.error("UPLOAD ERROR:", err.response?.data || err.message);
    return res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});