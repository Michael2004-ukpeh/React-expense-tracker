import React, {useState, useContext, useEffect, useRef} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Modal from './Modal'


const AddTransaction = () => {
  const {AddTransaction, transactions} = useContext(GlobalContext)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState('0')
  const [modal, setModal] = useState(false)
  const ids = transactions.map(transaction => transaction.id)
  const inputRef = useRef(null)
  const onSubmit = (e) =>{
    e.preventDefault();
    if(text===''){
      alert('enter a valid description')
      return false
    }
    let transaction = {
      id: ids[ids.length-1] + 1,
      text,
      amount: parseFloat(amount)
    }
    AddTransaction(transaction)
    setModal(true)
  
    
  }

  useEffect(() =>{
       inputRef.current.focus()
       
     }, [])
    return (
        <div className="add-transaction">
            <h3>Add New Transaction</h3>
            <form className="form" onSubmit={(e) => onSubmit(e)} >
              <div className="forminput">
                <label htmlFor="description">Description</label>
                <input type="text" 
                name="text"
                 id="text"
                 ref = {inputRef}
                 value ={text}
                 onChange = {(e) => setText(e.target.value)}
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
                value ={amount}
                onChange = {(e) => setAmount(e.target.value)}
                 placeholder="Enter Amount" />
              </div>
              <button className="btn" type="submit"> Add Transaction</button>
            </form>
             {modal === true ? (
                <Modal >
           
                  
                  <div className="successful">
                  <h4 className="close" onClick = {() => {
                    setModal(false)
                    setAmount('')
                    setText('')
                  }}>×</h4>
                    <h1>Transaction Successful✅</h1>
                    <h2 className = {amount < 0 ? "expense" : "income"}>{amount < 0 ? "-" : ""}${Math.abs(amount)} {amount < 0 ? "spent" : "received"}</h2>
                  </div>
             
              </Modal>
      ) : null}
        </div>
      
    )
}

export default AddTransaction
