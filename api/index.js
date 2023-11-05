import express from "express";
import auth_route from "./routes/auth_route.js";
import posts_route from "./routes/users_route.js";
import users_route from "./routes/posts_route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", auth_route);
app.use("/api/users", users_route);
app.use("/api/posts", posts_route);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
