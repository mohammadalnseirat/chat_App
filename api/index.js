import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  })
);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
