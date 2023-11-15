const express = require("express");
const prisma = require("../db/prisma");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
    const projects = await prisma.project.findMany()
    res.json(projects)
})

app.listen(port, () => console.log(`Server listening on port ${port}`));