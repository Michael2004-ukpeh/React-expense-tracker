import React, {useReducer, createContext} from 'react';
import reducer from './reducer'

const firstState = {
    transactions:  [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },  
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
 ]
}

 export const GlobalContext = createContext(firstState)
const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, firstState)
    
    const AddTransaction = (transaction) =>{
        dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }
    const removeTransaction = (id) =>{
        dispatch({type: 'REMOVE_TRANSACTION', payload: id})
    }
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions,
            AddTransaction,
            removeTransaction
        }}>
             {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
