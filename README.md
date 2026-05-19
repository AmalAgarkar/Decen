# ☁️ Decen — Decentralized File Storage App

Decen is a decentralized file storage application built using React, Node.js, IPFS (Pinata), and Ethereum (ethers.js).  
It allows users to upload files to IPFS and optionally store file references (CID) on the blockchain.

---

## 🚀 Features

- 📁 Upload files from browser
- ☁️ Store files on IPFS via Pinata
- 🔐 Secure backend (API keys hidden)
- ⚡ React frontend UI
- ⛓️ Ready for Ethereum smart contract integration
- 📦 CID generation for decentralized file access

---

## 🏗️ Tech Stack

- Frontend: React.js, Axios, CSS
- Backend: Node.js, Express.js
- Storage: IPFS (Pinata)
- Blockchain (optional): ethers.js, Solidity
- Other: Multer, dotenv, FormData

---

## 📁 Project Structure

Decen/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── .env (not uploaded)
│
├── frontend/
│   ├── src/
│   ├── App.js
│   ├── package.json
│
├── .gitignore
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone Repo
>git clone https://github.com/AmalAgarkar/Decen.git
>cd Decen

### 2. Backend Setup
>cd backend
>npm install

Create .env:
>PINATA_API_KEY=your_key
>PINATA_SECRET_API_KEY=your_secret

Run backend:
>node index.js

Backend runs on:
http://localhost:5000

---

### 3. Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

---

## 📤 Upload Flow

User → React → Backend → Pinata → IPFS → CID returned

---

## 🔐 Security

- API keys stored in backend (.env)
- Never exposed to frontend
- .env excluded via .gitignore

---

## 📡 API

POST /upload

Form-data:
file: binary

Response:
{
  "cid": "QmXXXX"
}

---

## 🌐 Future Improvements

- Store CID on blockchain
- MetaMask login
- File history dashboard
- Deploy backend + frontend
