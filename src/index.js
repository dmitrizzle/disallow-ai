const USER_AGENTS = require("./constants/user-agents");

const printRobotsTXT = (options) => {
  let robotsTXT = "";
  const path = options?.path || "/";

  USER_AGENTS.forEach(({ agents }) => {
    agents.forEach((agent) => {
      robotsTXT += `User-agent: ${agent}\n`;
      robotsTXT += `Disallow: ${path}\n`;
    });
  });
  return robotsTXT;
};

const userAgents = USER_AGENTS;

module.exports = {
  printRobotsTXT,
  userAgents,
};
