import express from "express";
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}