const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
