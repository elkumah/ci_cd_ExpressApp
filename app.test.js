const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return 200 and message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Production Grade CI 🚀");
  });
});
