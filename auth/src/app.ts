import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

const app = express();
app.set('trust proxy', true);

import { currentUserRouter } from "./routes/current-user";
import { singinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, " ", req.url);
  next();
});

app.use(currentUserRouter);
app.use(singinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };