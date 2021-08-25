const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useNewUrlParser:true
        })
        console.log(`Database Connected : ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log(`Error:${err.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB