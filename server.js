import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

//connect mongodb
import { connectMongoDB } from "./src/config/monogoConfig.js";
connectMongoDB();

// middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "https://library-client-xi.vercel.app/",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  // you can leave this for the prod as well to track the user requestes
  app.use(morgan("dev"));
}

//rotuers
import userRouter from "./src/routers/userRouter.js";
import bookRouter from "./src/routers/bookRouter.js";
import burroRouter from "./src/routers/burrowRouter.js";
import { auth } from "./src/middlewares/auth.js";
import reviewRouter from "./src/routers/reviewRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/burrows", auth, burroRouter);
app.use("/api/v1/reviews", reviewRouter);

//server status
app.get("/", (req, res, next) => {
  res.json({ message: "server is healthy" });
});

app.use("*", (req, res, next) => {
  const err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

//global error handler
app.use((error, req, res, next) => {
  console.log(error.message, "=======");

  res.status(error.status || 500);
  res.json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
