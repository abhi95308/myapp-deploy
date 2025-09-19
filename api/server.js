import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", env: process.env.NODE_ENV || "unknown" });
});

app.get("/", (req, res) => {
  res.send("Hello from the API!");
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
