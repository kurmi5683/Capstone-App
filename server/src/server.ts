import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";

import dotenv from "dotenv";
import cors from "cors";
import user_router from "./routes/userRouter";

import tour_router from "./routes/toursRouter";
import booking_router from "./routes/bookingRouter";
import review_router from "./routes/reviewRouter";

dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use("/user", user_router);
app.use("/tour", tour_router);
app.use("/booking", booking_router);
app.use("/review", review_router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: err.message,
  });
});

app.get("/", (req, res) => {
  res.send({ status: "Ok", message: "Api!" });
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

const PORT = process.env.SERVER_PORT || 5020;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
