import express, { json } from "express";
const app = express();

app.use(json());

app.get("/", (req, res) => res.send("Hello Jonathan"));

const messages = [];

app.post("/message", (req, res) => {
    if(!(req.body?.message)) {
        res.status(400).send("No message specified!");
    } else {
        messages.push({ server: { when: Date.now() }, ...req.body });
        res.status(200).send(messages);
    }

})

app.get("/messages", (_req, res) => {
    res.status(200).send(messages);
});

app.listen(process.env.PORT, "0.0.0.0", console.log.bind(console, `Listening on ${process.env.PORT}`));
