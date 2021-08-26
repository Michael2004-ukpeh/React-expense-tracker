import React, {useContext, useEffect} from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const HistoryList = () => {
  const {transactions,getAllTransactions} = useContext(GlobalContext)
  useEffect(()=>{
    getAllTransactions()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    return (
        <div className = "history-list">
          {transactions.map((transaction) =>{
            return (
                <Transaction key = {transaction._id} {...transaction}/>
            )
          })}
          
        </div>
    )
}

export default HistoryList
