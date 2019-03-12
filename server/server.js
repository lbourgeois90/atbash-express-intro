const express = require('express');

//get an isntance of express
const app = express();

//Use the public director we made for static files
app.use( express.static('server/public') );

const port = 5000;
app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});


