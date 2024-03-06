import { printRobotsTXT, userAgents } from "./index";

describe("Distribution", () => {
  test("printRobotsTXT smoke test", () => {
    expect(typeof printRobotsTXT).toBe("function");

    const result1 = printRobotsTXT({ path: "/test" });
    expect(typeof result1).toBe("string");
    expect(result1).toContain("User-agent: Amazonbot\nDisallow: /test\n");

    const result2 = printRobotsTXT();
    expect(typeof result2).toBe("string");
    expect(result2).toContain("User-agent: Amazonbot\nDisallow: /\n");
  });
  test("printRobotsTXT user string variations", () => {
    const result = printRobotsTXT();
    expect(result).toContain("User-agent: omgili\nDisallow: /\n");
    expect(result).toContain("User-agent: Omgilibot\nDisallow: /\n");
  });

  test("userAgents raw data smoke test", () => {
    expect(Array.isArray(userAgents)).toBe(true);
    expect(userAgents.find(({ id }) => id === "qyfp").agents[0]).toBe(
      "Amazonbot"
    );
  });
});
