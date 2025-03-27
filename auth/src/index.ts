import express, { NextFunction, Request, Response } from "express";

const app = express();

import { currentUserRouter } from "./routes/current-user";
import { singinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method,' ',req.url);
  next();
})

app.use(currentUserRouter);
app.use(singinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.listen(3000, () => {
  console.log(`Server start at port 3000`);
});
