const express = require("express");
const prisma = require("../db/prisma");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors())

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api/projects", async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

app.get("/api/summary", async (req, res) => {
  const summary = await prisma.summary.findMany();
  res.json(summary);
});

app.get("/api/about", async (req, res) => {
  const about = await prisma.about.findMany();
  res.json(about);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
