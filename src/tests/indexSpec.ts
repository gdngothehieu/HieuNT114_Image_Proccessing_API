import app from "../index";
import supertest from "supertest";
import { resizeImage } from "../utils/resizeHelpers";
import path from "path";
import fs from "fs";

const request = supertest(app);

describe("Testing API endpoint", () => {
  const imageName = "african-warlord.jpg";
  const imageWidth = 100;
  const imageHeight = 100;
  it("should successfully get the /api and return status 200", async () => {
    const response = await request.get(`/api`);
    expect(response.status).toBe(200);
  });
  it("should successfully get the /api/images and return status 200", async () => {
    const response = await request.get(
      `/api/images?name=${imageName}&width=${imageWidth}&height=${imageHeight}`
    );
    expect(response.status).toBe(200);
  });
});

describe("Testing utilities function", () => {
  it("Testing Resize helper function", async () => {
    const imageName = "african-warlord.jpg";
    const imagePath = path.normalize(
      __dirname +
        "../../../src/thumbnail/" +
        imageName +
        "-" +
        "100" +
        "-" +
        "100" +
        ".jpg"
    );
    await resizeImage(imageName, 100, 100);
    expect(fs.existsSync(imagePath)).toBeTrue;
  });
});
