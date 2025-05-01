import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cookieSession from "cookie-session";
import { currentUser, errorHandler, NotFoundError } from "@tkgtickets/common";
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
    secure: false,
    sameSite: "lax",
  })
);

app.use(currentUser);

app.use(createChargeRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, " ", req.url);
  next();
});

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
