import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const TransactionDetails = () => {
    const {transactions,getTransaction,single, updateTransaction} = useContext(GlobalContext)
    const {id} = useParams()
    const history = useHistory()
    
    const [text, setText] =useState("")
    const [amount, setAmount] = useState("")
     
    const [formtext, setformText] =useState(text)
    const [formamount, setformAmount] = useState(amount)
     
    useEffect(() =>{
    getTransaction(id)
    console.log(single)
    setText(single.text)
    setAmount(single.amount)
  }, [])
  const update = (id) =>{
      let transaction={
          text: formtext,
          amount: formamount
      }
    updateTransaction(id,transaction)
    history.push('/')
  }

    return (
        <div style={{width: "80%"}} className = "wrapper">
            <section>
            <h1 style = {{textAlign: 'center'}}>Transaction Details</h1>
             <h2>Description : {text}</h2>
             <h2 className ={amount < 0 ? "expense" : "income"}>Amount : {amount < 0 ? "-" : ""}${Math.abs(amount)}</h2>
             <Link to = "/" className ="btn" style={{textAlign: "center", textDecoration: 'none'}}> Go Back</Link>
             </section>
            <section>
            <h1 style = {{textAlign: 'center'}}> Update Transaction Details</h1>
             <div className="add-transaction">
            
            <form className="form"  >
              <div className="forminput">
                <label htmlFor="description">Description</label>
                <input type="text" 
                name="text"
                 id="text"
                 value ={formtext}
                 onChange = {(e) => setformText(e.target.value)}
                placeholder="Enter text.." />
              </div>
              <div className="forminput">
                <label htmlFor="amount">Amount
                  <br />
                  (-VE = Expense, +VE = Income)
                </label>
                <input type="text" 
                name="amount" 
                id="amount"
                value ={formamount}
                onChange = {(e) => setformAmount(e.target.value)}
                 placeholder="Enter Amount" />
              </div>
              </form>
              </div>
             <button className ="btn"  onClick={() => update(id)}> Update</button>
             </section>
        </div>
       
    )
}

export default TransactionDetails
