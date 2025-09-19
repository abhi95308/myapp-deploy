import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "api" });
});

app.get("/", (req, res) => {
  res.send("API root is working");
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
