import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const router = express.Router();



//For initial test only
router.get("/", (req, res) => {
  res.send("API is running...");
});


// POST of cop location
router.post("/loc", (req, res) => {
  const { username, message } = req.body;

  req.io.emit("newMessage", { username, message });

  return res.status(200).json({ success: true, message: "Message sent to sockets" });
});



export default router;