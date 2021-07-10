import express = require('express');

const port = 3000;

let app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
})
