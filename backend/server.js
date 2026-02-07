import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoutes);

app.get("/", (req, res) => {
  res.json({ status: "server is working" });
});

app.post("/analyze", (req, res) => {
  const { repoUrl } = req.body;

  if (!repoUrl) {
    return res.status(400).json({ error: "Repository URL is required" });
  }

  res.json({
    message: "Repository received",
    repoUrl
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


