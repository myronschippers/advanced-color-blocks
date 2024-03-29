const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('client'));

app.listen(PORT, function() {
    console.log('Listening on port, ', PORT);
});
