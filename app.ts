import express, { Application, Request, Response } from "express";
const app = express();
const port = 3000;

app.use(express.json());
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}