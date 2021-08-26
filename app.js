const express =  require('express')
const colors =require('colors')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const notFound = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')
const transactionRoutes = require('./routes/transactionRoutes')
const connectDB = require('./db/db')
const app = express()
dotenv.config({path: './config/config.env'})
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//for production 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./client/build'))
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    } )
}
//app routes
app.use('/api/v1/transactions',transactionRoutes)  

app.use(notFound)
app.use(errorMiddleware)

//app listen
const PORT = process.env.PORT || 5000
const start = ()=>{
    try {
        connectDB()
        app.listen(PORT, () =>{
            console.log(`Server is running on ${PORT} in ${process.env.NODE_ENV}`.yellow)
        })
        
    } catch (error) {
        console.log(`Listening Error ${error}`)
    }
}
start()