import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import auth from "./routes/auth.js";

// configure env
dotenv.config();

// database congigure
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", auth);

// rest Api
app.get("/", (req, res) => {
  res.send("<h1>welcome to Ravi Ecommerce-Shop</h1>");
});

// port
const port = process.env.PORT || 8080;

// run listen
app.listen(port, () => {
  console.log(`server is runing on  ${port}`.bgGreen.bgBlue);
});
console.log("hello world");
