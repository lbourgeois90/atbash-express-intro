const express = require('express');

//get an isntance of express
const app = express();

//Use the public director we made for static files
app.use( express.static('server/public') );

let catArray = ['Tuna', 'Mackerel'];

let dogArray = ['Thomposon', 'Winnie', 'Treo'];

//We can get things that are not in a file
app.get('/cats', function(req, res) {
    console.log(`in get cats`);
    //Good servers always respond
    res.send(catArray);
})

app.get('/dogs', (req,res) => {
    console.log(`in get dogs`);
    res.send(dogArray);
})

const port = 5000;
app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});


