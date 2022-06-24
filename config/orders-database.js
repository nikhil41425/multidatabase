require('dotenv').config()
const mongoose=require('mongoose')

const con=mongoose.createConnection(process.env.ORDERS_DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })

con.on('connected',()=>{
    console.log(`Orders Database connected to ::: ${process.env.ORDERS_DB}`)
})
con.on('error',(err)=>{
    console.log(`Orders Database error    ::: ${err}`)
})

module.exports=con