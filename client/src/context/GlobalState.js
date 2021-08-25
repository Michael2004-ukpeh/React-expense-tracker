import React, {useReducer, createContext} from 'react';
import reducer from './reducer'

const firstState = {
    transactions:  [
 ]
}

 export const GlobalContext = createContext(firstState)
const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, firstState)
    
    const AddTransaction = (transaction) =>{
        console.log(transaction)
        console.log(state.transactions)
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
