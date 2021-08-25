const mongoose = require('mongoose')

const Schema = mongoose.Schema

const transactionSchema = new Schema({
    description: {
        type: String,
        trim: true,
        required: [true, "A description is needed"],
        maxlenght:[30, "Description is too long"]
    },
    amount:{
        type: Number,
        required: [true, 'Please add an amount for the transaction']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps:true})


const Transaction = mongoose.model('Transaction', transactionSchema)
module.exports= Transaction