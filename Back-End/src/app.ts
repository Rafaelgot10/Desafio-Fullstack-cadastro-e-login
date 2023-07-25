import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import usersRoutes from "./Routes/users.routes";
import loginRouter from "./Routes/login.routes";
import contactRouter from "./Routes/contact.routes";

const app: Application = express();
app.use(json());

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/login", loginRouter);

app.use("/contact", contactRouter);

app.use(handleErrors);

export default app;
