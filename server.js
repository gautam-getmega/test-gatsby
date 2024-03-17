const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const renderer = require("gatsby").default; // Import Gatsby's SSR renderer

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  renderer(req) // Use the renderer for SSR pages
    .then(({ html }) => res.send(html))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server-Side Rendering Error");
    });
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});

exports.gatsbyApp = app;
