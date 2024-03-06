import USER_AGENTS from "./constants/user-agents";

export const printRobotsTXT = (options) => {
  let robotsTXT = "";
  const path = options?.path || "/";

  USER_AGENTS.forEach(({ agents }) => {
    agents.forEach((agent) => {
      robotsTXT += `User-agent: ${agent}\n`;
    });
    robotsTXT += `Disallow: ${path}\n`;
  });
  return robotsTXT;
};

export const userAgents = USER_AGENTS;