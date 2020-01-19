const express = require("express");
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// routes
   
app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( {
        "status":200,
        "message": "Hello world the is working 🎉🎉🎉🎉"
    }));
})

app.post('/send', (req, res)=>{

    // get the body elements
    console.log(req.body["name"]);
    // do whatever you want and then send the response based on that
    res.status(200);
    res.send("send")
})

// port 
port = process.env.PORT || 3000

app.listen(port, function(){
    console.log(`App is listining on port ${port}`)
});