import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
import { connectMongoDB } from "./src/config/monogoConfig.js";
connectMongoDB();

const corsOptions = {
  origin: [
    "https://library-client-xi.vercel.app", // Production frontend URL
    "http://localhost:5173", // Local development frontend URL
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
};

// Apply CORS options to all preflight requests
app.options("*", cors(corsOptions));

// Apply CORS middleware globally with options
app.use(cors(corsOptions));
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Routers
import userRouter from "./src/routers/userRouter.js";
import bookRouter from "./src/routers/bookRouter.js";
import burroRouter from "./src/routers/burrowRouter.js";
import { auth } from "./src/middlewares/auth.js";
import reviewRouter from "./src/routers/reviewRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/burrows", auth, burroRouter);
app.use("/api/v1/reviews", reviewRouter);

// Server status
app.get("/", (req, res, next) => {
  res.json({ message: "server is healthy" });
});

// 404 Not Found handler
app.use("*", (req, res, next) => {
  const err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

// Global error handler
app.use((error, req, res, next) => {
  console.error(error.message, "=======");

  res.status(error.status || 500);
  res.json({
    status: "error",
    message: error.message,
  });
});

// Start the server
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});
