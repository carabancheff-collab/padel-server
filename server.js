import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Padel Server Running 🎾");
});

app.get("/test", (req, res) => {
  res.json({ status: "Server is alive 🚀" });
});

app.post("/process-video", (req, res) => {
  console.log("Received:", req.body);
  res.json({ status: "Video request received ✅" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
