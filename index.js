import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();


// DB Connnection Here
mongoose
  .connect(
    "mongodb+srv://masumhaque:169572274@cluster0.wnhig.mongodb.net/video_upload?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
    }
  )
  .then(() => console.log("Connection to Datebase"))
  .catch((error) => {
    if (error) console.log("Database connection failed");
  });


app.use(cookieParser());
app.use(express.json());
  
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal server error!";
    return res.status(status).json({
        success: false,
        status,
        message
    })
})


app.listen(5000, () => {
    console.log("Connected");
})