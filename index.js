const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");


const app = express()

// app.use( (req, res) => {
//         console.log("we got a new requeest");
//         res.send(`<h4>This is my webpage</h4>`)
// })

app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
        res.send('This is the home page!!!')
})

app.get('/second_page', (req, res) => {
        res.send('This is the second home page :D')
})


app.get("/r/:subreddit", (req, res) => {
        const { subreddit } = req.params;
        res.send(`<h4> You are on the ${subreddit} subreddit </h4>`)
});

app.get('/r/:genere/:catagory/:bookTitle', (req, res) => {
        const {genere, catagory, bookTitle} = req.params;
        res.send(`<h1> You are in the ${genere} genere, in the ${catagory} catagory, on book: ${bookTitle} </h1>`)
})

app.post('/cats', (req, res) => {
        res.send('This is different than a get request')
})

app.get(`/cats `, (req, res) => {
        res.send("Meow!")
})
app.get(`/dogs`, (req, res) => {
        res.send("Woof!!")
})

app.get(`/oops`, (res, req) => {
        console.log("The oops is working");
        res.send("Working!")

})

app.get("/search", (req, res) => {
        const {q} = req.query;
        if (!q) {
                res.send(`Nothing is found, nothign to show`)
        }
});

app.get('*', (req, res) => {
        res.send(`I dont know what path!`)
})



app.listen(8080, () => {
        console.log("Listening on port 8080");
})

