import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello Jonathan"));
app.listen(process.env.PORT, "0.0.0.0", console.log.bind(console, `Listening on ${process.env.PORT}`));
