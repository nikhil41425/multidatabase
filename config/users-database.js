require('dotenv').config()
const mongoose=require('mongoose')

const con=mongoose.createConnection(process.env.USERS_DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })

con.on('connected',()=>{
    console.log(`Users Database connected to ::: ${process.env.USERS_DB}`)
})
con.on('error',(err)=>{
    console.log(`Users Database error  ::: ${err}`)
})

module.exports=con