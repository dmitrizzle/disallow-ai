const path = require("path");
const { printRobotsTXT } = require("../src/index.js");
const fs = require("fs");

const robotsTXT = printRobotsTXT();
const robotsPath = path.join(__dirname, "../src", "robots.txt");

fs.writeFile(robotsPath, robotsTXT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("> updated `robots.txt`");
});
