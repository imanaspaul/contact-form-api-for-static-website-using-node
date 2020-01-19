const express = require("express");
const app = express();


// routes
   
app.get('/', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( {
        "status":200,
        "message": "Hello world the is working 🎉🎉🎉🎉"
    }));
})

// port 
port = process.env.PORT || 3000

app.listen(port, function(){
    console.log(`App is listining on port ${port}`)
});