const express = require('express')
const ENV = require('./config')
const publicRoutes = require('./routes/public-routes')
const userRoutes = require('./routes/user-routes')
const adminRoutes = require('./routes/admin-routes')
const app = express()

require('./db/mongoose')

app.use(express.json())
app.use(publicRoutes)
app.use(adminRoutes)
app.use(userRoutes)


app.listen(ENV.port,()=>{
    console.log(`Server started: http://127.0.0.1:${ENV.port}`)
})