const express = require("express");
const server = express();

const { printRobotsTXT } = require("disallow-ai");
server.get("/robots.txt", (req, res, next) => {
  res.type("text/plain");
  res.send(printRobotsTXT());
});

server.listen(3000, () =>
  console.log(
    "Running on :3000. Visit http://localhost:3000/robots.txt to see the robots.txt file."
  )
);
