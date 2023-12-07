const express = require("express");
const urlRouter = require("./shortURLS/urls.router");
const useRouter = require("./users/uses.router");


const app = express();

app.use(express.json());

app.use("/urls", urlRouter);
app.use("/uses", useRouter);
// TODO: Add code to meet the requirements and make the tests pass.

app.use((req, res, next) => {
    next({
      status: 404,
      message: `Not found: ${req.originalUrl}`});
});

app.use((error, req, res, next) => {
    console.error(error);
    const {status = 500, message = "something went wrong" } = error;
    res.status(status).json({error: message});
})

module.exports = app;
