var express = require ('express');
var mongoose = require ('mongoose');
var bodyparser = require ('body-parser');
var cors = require ('cors');
var path = require ('path');

var app = express();
const port = 3002;

mongoose.connect('mongodb://localhost:27017/mean');
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongodb');
});
mongoose.connection.on('error', (err) => {
    if (err) {
    console.log('Error in Database' + err);
    }
}); 

var route = require ('./routes/route');

app.use(cors());
app.use(bodyparser.json());
app.use('/', route);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started at port:', + port);
});