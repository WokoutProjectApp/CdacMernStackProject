const express = require('express');
const bodyparser = require('body-parser')


const Userroutes = require('./Router/UserRoutes')

var app = express()
const PORT = 6655

app.use(bodyparser.json())

const mongoose = require('mongoose')
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/WorkOutApp',{})

app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});

db.once('open',()=>{
    console.log("Database Connected")
})



const exercisesRouter = require('./Router/exercises');
const usersRouter = require('./Router/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/User' , Userroutes)

app.listen(PORT,()=>{
    console.log(`server is running on PORT :${PORT}`)
}
)