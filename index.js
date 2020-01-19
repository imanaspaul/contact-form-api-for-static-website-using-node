const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const transport = require("./nodeSend");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// routes
   
app.get('/', (req, res)=>{
    console.log(process.env.DB_HOST)
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( {
        "status":200,
        "message": "Hello world the is working 🎉🎉🎉🎉"
    }));
})

app.post('/send', (req, res)=>{

    //get the body elements
    const name = req.body["name"];
    const email = req.body["email"];
    const subject = req.body["subject"];
    const message = req.body["message"];
    //res.setHeader("Content-Type", "text/html");
    // do whatever you want and then send the response based on that
    transport
    .sendMail({
        from: 'wixcrodivexpert@manascode.com',
        to: 'imanaspaul@gmail.com',
        subject: `${subject} by ${name} - ${email}`,
        html: message
    })
    .then(([result]) => {
        console.log('Message delivered with code %s %s', result.statusCode, result.statusMessage);
        res.status(200);
        res.send('sent');
    })
    .catch(err => {
        console.log('Errors occurred, failed to deliver message');
        res.status(501);
        res.send("not sent successfully")
        if (err.response && err.response.body && err.response.body.errors) {
            err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
        } else {
            console.log(err);
        }
    });
});




// port 
port = process.env.PORT || 3000

app.listen(port, function(){
    console.log(`App is listining on port ${port}`)
});