import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  res.send(`
    <html>
      <head><title>Dokploy Demo</title></head>
      <body style="font-family: sans-serif; padding:20px">
        <h1>Dokploy Demo: Frontend</h1>
        <p>API base: <code>${api}</code></p>
        <p>Try the API health endpoint:
          <a href="${api}/health" target="_blank">${api}/health</a>
        </p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Frontend running on port \${PORT}\`);
});
