const reducer = (state, action) =>{
    switch (action.type) {
         case "ADD_TRANSACTION":
            return{
                ...state,
                transactions : [...state.transactions, action.payload]
            }
          case "REMOVE_TRANSACTION":
              let newTransactions = state.transactions.filter((trans) => trans.id !== action.payload)
              return {
                  ...state,
                  transactions: newTransactions
              }
    
        default:
            return state
            
    }
}
export default reducer