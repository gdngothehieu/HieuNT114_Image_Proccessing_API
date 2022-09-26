import express from "express";
import { resize } from "../../utils/resizeHelpers";

const images = express.Router();

images.get(
  "/images",
  resize,
  (req: express.Request, res: express.Response): void => {
    res.send(`Resize the images by inputting the queries`);
  }
);

export default images;
