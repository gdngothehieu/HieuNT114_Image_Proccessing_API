import express from "express";
import images from "./routes/api/imagesAPI";

const app = express();
const port = 3000;

app.use("/api", images);

app.get("/api", (req: express.Request, res: express.Response): void => {
  res.send("Welcome to Image Processing App");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
