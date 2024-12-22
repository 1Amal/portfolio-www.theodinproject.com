const express = require('express');

const app = express();
const port = 3000;

app.set("view enginer","ejs");

app.get('/', (req, res) => {
    res.send('usernames will be logged here - wip');
});

app.get('/new',(req,res)=>{
    
});

app.post('/new',(req,res)=>{
    console.log("username to be saved: ", req.body.username)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});