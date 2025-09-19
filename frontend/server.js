import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "frontend" });
});

app.get("/", (req, res) => {
  res.send("Frontend is working");
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
