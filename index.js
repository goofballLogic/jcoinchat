import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(cors());

app.get("/", (_req, res) => res.send("Hello Jonathan"));

const messages = [];

app.post("/messages", (req, res) => {
    if(!(req.body?.message)) {
        res.status(400).send("No message specified!");
    } else {
        messages.push({ server: { when: Date.now() }, ...req.body });
        if(messages.length > 100) messages.shift();
        res.status(200).send(messages);
    }

})

app.get("/messages", (_req, res) => {
    res.status(200).send(messages);
});

app.listen(process.env.PORT, "0.0.0.0", console.log.bind(console, `Listening on ${process.env.PORT}`));
