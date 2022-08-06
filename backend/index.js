const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const session = require('express-session');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
    await console.log('Connected to MongoDB');
    }
);

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    }));

app.use('/user', require('./routes/user'));
app.use('/event', require('./routes/event'));

app.post('/session', async(req, res) => {
    const User = require('../models/user.model');
    const user = await User.findOne({ _id : req.body.id});
    if (user){
        res.send(user._id);
    }
    else {
        res.send('User not found');
    }
}
);



app.listen(port, () => {
    console.log(`Server running on port localhost:${port}`);
}
);

module.exports = app;