const express = require('express')
const {
    getAllTransactions,
    createTransaction,
    getTransaction,
    deleteTransaction,
    updateTransaction
} = require('../controllers/transactionController')
const router = express.Router()

router.route('/').get(getAllTransactions).post(createTransaction)

router.route('/:id').delete(deleteTransaction).patch(updateTransaction).get(getTransaction)

module.exports = router