const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');


//import Routes
const authRoutes = require('./routes/authRoutes'); 
const userRoutes = require('./routes/userRoutes');




//app
const app = express();

//db

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}).then(() => console.log("DB Connected"));


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);




const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`SERVER  ${port}`);

});

const Order = require('./models/orderModel');

// Function call
