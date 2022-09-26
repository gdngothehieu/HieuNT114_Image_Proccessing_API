import express from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const resize = async (req: express.Request, res: express.Response) => {
  try {
    const imgName = req.query.name;
    const imgWidth = Number(req.query.width);
    const imgHeight = Number(req.query.height);
    const imagePath: string = path.normalize(
      __dirname +
        "../../../src/thumbnail/" +
        imgName +
        "-" +
        imgWidth +
        "-" +
        imgHeight +
        ".jpg"
    );

    const originaImage: string = path.normalize(
      __dirname + "../../../src/images/" + imgName
    );

    // Error handling
    if (!fs.existsSync(originaImage)) {
      res.status(400).send("There is no image");
      return;
    }
    if (imgWidth < 0 || imgHeight < 0) {
      res.status(400).send("Value must be positive integer");
      return;
    }
    if (!imgWidth || !imgHeight) {
      res.status(400).send("no value for width or height");
      return;
    }

    // processing
    if (fs.existsSync(imagePath)) {
      return res.status(200).sendFile(imagePath);
    }
    if (req.query.name != null) {
      resizeImage(
        imgName as string,
        (imgWidth as unknown) as number,
        (imgHeight as unknown) as number
      );

      await setTimeout(() => {
        return res.status(200).sendFile(imagePath);
      }, 500);
    }
  } catch (e) {
    console.log(e);
  }
};

const resizeImage = async (name: string, width: number, height: number) => {
  try {
    await sharp("./src/images/" + name)
      .resize({ width: width, height: height })
      .toFile("./src/thumbnail/" + name + "-" + width + "-" + height + ".jpg");
  } catch (e) {
    console.log(e);
  }
};

export { resizeImage, resize };
