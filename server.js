import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Padel Server Running 🎾");
});

app.post("/process-video", (req, res) => {
  const { videoUrl, playerName } = req.body;

  console.log("Processing:", playerName, videoUrl);

  // Aquí luego llamaremos a la IA

  res.json({ status: "received" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
