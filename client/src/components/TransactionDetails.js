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
  }, [id, transactions])

    return (
        <div style={{width: "80%"}} className = "wrapper">
            <h1 style = {{textAlign: 'center'}}>Transaction Details</h1>
             <h2>Description : {text}</h2>
             <h2 className ={amount < 0 ? "expense" : "income"}>Amount : {amount < 0 ? "-" : ""}${Math.abs(amount)}</h2>
             <Link to = "/" className ="btn" style={{textAlign: "center", textDecoration: 'none'}}> Go Back</Link>
        </div>
    )
}

export default TransactionDetails
