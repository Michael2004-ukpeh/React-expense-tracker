import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const TransactionDetails = () => {
    const {transactions} = useContext(GlobalContext)
    const {id} = useParams()
    
    const [text, setText] =useState("")
    const [amount, setAmount] = useState("")
     
    useEffect(() =>{
    const newTransaction= transactions.find(transaction => transaction.id === parseInt(id)) 
    setText(newTransaction.text)
    setAmount(newTransaction.amount)
  }, [])

    return (
        <div className = "wrapper">
            <h1>Transaction Details</h1>
             <h2>Description : {text}</h2>
             <h2>Amount : ${amount}</h2>
             <Link to = "/" className ="btn" > Go Back</Link>
        </div>
    )
}

export default TransactionDetails
