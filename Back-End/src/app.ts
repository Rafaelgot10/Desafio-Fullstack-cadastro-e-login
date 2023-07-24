import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import usersRoutes from "./Routes/users.routes";
import loginRouter from "./Routes/login.routes";

// import loginRouter from "./routes/login.routes";
// import categorieRouter from "./routes/categories.routes";
// import realEstateRouter from "./routes/realEstate.routes";
// import schedulesRouter from "./routes/schedules.routes";

const app: Application = express();
app.use(json());

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/login", loginRouter);

// app.use("/categories", categorieRouter);

// app.use("/realEstate", realEstateRouter);

// app.use("/schedules", schedulesRouter);

app.use(handleErrors);

export default app;
