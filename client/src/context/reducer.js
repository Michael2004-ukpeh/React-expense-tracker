const reducer = (state, action) =>{
    switch (action.type) {
        case "GET_ALL_TRANSACTIONS":
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
         case "ADD_TRANSACTION":
            return{
                ...state,
                transactions : [...state.transactions, action.payload]
            }
          case "REMOVE_TRANSACTION":
              let newTransactions = state.transactions.filter((trans) => trans._id !== action.payload)
              return {
                  ...state,
                  transactions: newTransactions
              }
          case "GET_TRANSACTION":
              return {
                  ...state,
                  single: action.payload
              }
           case "UPDATE_TRANSACTION":
               let updatedTransaction =  state.transactions.map((transaction) =>{
                   if(transaction._id === action.payload.id){
                       return {
                           ...transaction,
                           _id: action.payload.id,
                           text: action.payload.data.text,
                          amount: action.payload.data.amount,
                        }
                   }else{
                   return transaction
                   }
               })
               return {
                   ...state,
                   transactions: updatedTransaction
               }  
        case "TRANSACTION_ERROR" :
            return{
                ...state,
                error: action.payload
            }

        default:
            return state
            
    }
}
export default reducer