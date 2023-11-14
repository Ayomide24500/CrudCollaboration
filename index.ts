import express, { Application, application } from "express";

const port: number = 1330;

const app: Application = express();

app.use(express.json());

app.listen(port, () => {
  console.log("server is up and running");
});
