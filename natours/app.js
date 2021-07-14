import express from "express";
const app = express();

app.get("/hello", (req, res) => {
    // res.status(200).send("Hello");
    
});

const port = 3000;
app.listen(port, () => {
    console.log("App is running on " + port);
});
