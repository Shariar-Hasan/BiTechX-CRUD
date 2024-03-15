import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/user.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());
app.use(cors());

function main() {
  app.listen(PORT, () => {
    try {
      mongoose.connect(`${process.env.MONGODB_URI}`);
    } catch (error) {
      console.log(error);
    }
    console.log(`Server is running on port ${PORT}`);
  });
}
// router section
app.use("/api/user", router);

main();
