const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Posts API
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

//Handle Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));