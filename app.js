const express=require('express')
const bodyParser=require('body-parser')
const path = require('path')
const cors = require('cors')
const passport = require ('passport')
const users=require('./routes/users')
const orders=require('./routes/order')
const session = require('express-session');
const app = express()
const dotenv=require('dotenv').config()
require('./models/user')
require('./models/orders-schema')

const port=process.env.PORT || 3000

app.use(session({ secret: process.env.USER_SECRET,resave: true,saveUninitialized: true}))
app.use(session({ secret: process.env.ORDER_SECRET,resave: true,saveUninitialized: true}))

app.use(cors())

app.use(bodyParser.json())

require('./config/passport')(passport);

app.use(passport.initialize());

app.use(passport.session());

console.log(dotenv.parsed)

app.use(express.static(path.join(__dirname,'public')))

app.use('/users',users)
app.use('/orders',orders)

app.get('/',(req,res)=>{
    res.send('end point')
})

app.listen(port,()=>{
    console.log(`Server listening to PORT ::: ${port}`)
})

