import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const ExpenseIncome = () => {
  const {transactions} = useContext(GlobalContext);
  let incomeAmount = transactions.filter((transaction) => transaction.amount >= 0)
                        .reduce((total, item) =>{
                          return total += item.amount
                        }, 0)
  
  let expenseAmount = transactions.filter((transaction) => transaction.amount < 0)
                        .reduce((total, item) =>{
                          return total += item.amount
                        }, 0)
  
    return (
        <div className = "expense-income">
            
            <div className="income-box">
              <h3>INCOME</h3>
              <p className = 'income'>$ <span className="income-amount">{incomeAmount.toFixed(2)}</span></p>
            </div>
            <div className="expense-box">
              <h3>EXPENSE</h3>
              <p className = 'expense'>$ <span className=" expense-amount">{Math.abs(expenseAmount).toFixed(2)}</span></p>
            </div>

            
        </div>
    )
}

export default ExpenseIncome
