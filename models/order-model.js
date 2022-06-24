const con2=require('../config/orders-database')
const schema=require('./orders-schema')

const orderCollection='myorders'

var ordermodel=con2.model('Order',schema,orderCollection)

module.exports=ordermodel