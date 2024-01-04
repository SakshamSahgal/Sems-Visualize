const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 8080;
const fs = require('fs');

app.use(express.static(__dirname + '/Public'));
//use ejs

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    //read sems.json file
    let rawdata = fs.readFileSync(path.join(__dirname + "/Public/sems.json"));
    let sems = JSON.parse(rawdata);
    // console.log(sems);
    res.render(path.join(__dirname + "/Public/index.ejs"), {sems: sems});
})