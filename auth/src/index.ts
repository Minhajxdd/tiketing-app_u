import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  if(!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect(`mongodb://mongodb:27017/auth-db`);
    console.log(`Connected to mongodb`);
  } catch (err) {
    console.error(err);
  }

  app.listen(8001, () => {
    console.log(`Server start at port 3000`);
  });
};

start();
