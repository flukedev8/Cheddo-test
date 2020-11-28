const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


//initializations
const app = express();
app.use(cors());

//settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Global Variables
app.use((req, res, next)=>{
    next();
});

//Routes
app.use('/apis',require('./routes'));

//Public


//Starting the server on backend
app.listen(app.get('port'), () =>{
    console.log('Server on port',app.get('port'));
})