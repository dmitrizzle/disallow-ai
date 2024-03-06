import { printRobotsTXT, userAgents } from "./index";

describe("Distribution", () => {
  test("printRobotsTXT", () => {
    expect(typeof printRobotsTXT).toBe("function");

    const result1 = printRobotsTXT({ path: "/test" });
    expect(typeof result1).toBe("string");
    expect(result1).toContain("User-agent: Amazonbot\nDisallow: /test\n");

    const result2 = printRobotsTXT();
    expect(typeof result2).toBe("string");
    expect(result2).toContain("User-agent: Amazonbot\nDisallow: /\n");
  });

  test("userAgents raw data", () => {
    expect(Array.isArray(userAgents)).toBe(true);
    expect(userAgents.find(({ id }) => id === "qyfp").agents[0]).toBe(
      "Amazonbot"
    );
  });
});
