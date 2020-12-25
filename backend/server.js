const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
// const server = http.Server(app)
const io = require('socket.io')(server);




const port = 4000 || process.env.PORT;


// Middleware
app.use(express.json());


// Add headers
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});


io.on('connection',socket =>{
    socket.on('message',(input)=>{
        socket.broadcast.emit('message', input)
        console.log(input)
    })
})

server.listen(port , ()=>{ console.log(`listening on port ${port}`) })





 