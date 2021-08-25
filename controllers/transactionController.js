const Transaction = require('../models/Transaction')
const asyncWrapper = require('../middleware/asyncWrapper')
const {createCustomError} = require('../errors/customError')
//get all task

const getAllTransactions = asyncWrapper(async(req, res) =>{
 const transactions = await Transaction.find({})

 res.status(200).json({
     success: true,
     count: transactions.length,
     data: transactions
 })


})

const createTransaction = asyncWrapper(async(req,res,next) =>{
const{ description,amount} = req.body
 const transaction = await Transaction.create(req.body)
 return res.status(201).json({
     success: true,
     data : transaction
 })
})

const getTransaction = asyncWrapper(async(req,res,next) =>{
    const {id} = req.params
    const transaction = await Transaction.findOne({_id:id})
    if(!transaction){
        return next(createCustomError('Transaction with such id doesn\'t exist', 404))
    }
    return res.status(200).json({
        success: true,
        data: transaction
    })

})

const deleteTransaction = asyncWrapper(async(req,res, next) =>{
    const {id} = req.params
    const transaction = await Transaction.findOneAndDelete({_id:id})
    if(!transaction){
        return next(createCustomError(`No item with such id :${id}`, 404))
    }
    return res.status(200).json({
        success: true,
        data: [],
        message: `Item with Id has been deleted`
    })
})

const updateTransaction = asyncWrapper(async(req, res, next) =>{
    const {id} = req.params
    const transaction = await Transaction.findOneAndUpdate({_id:id}, req.body,{
        new:true,
        runValidators:true
    })
    if(!transaction){
        return next(createCustomError(`Can't update as trasaction with id; ${id} is not available`, 404))
    }  
    res.status(200).json({
        success: true,
        data: transaction
    })
})

module.exports = {
    getAllTransactions,
    createTransaction,
    getTransaction,
    deleteTransaction,
    updateTransaction
}