import React, {useReducer, createContext} from 'react';
import reducer from './reducer'
import axios from 'axios'

const firstState = {
    transactions:[
        
    ],
    single:{},
    error: null,
    loading:true
}

 export const GlobalContext = createContext(firstState)
const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, firstState)
    
    const AddTransaction = async(transaction) =>{
        const config = {
            headers :{
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/v1/transactions', transaction,config)
            dispatch({type: 'ADD_TRANSACTION', payload: res.data.data})

        }catch(error){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }
    const removeTransaction = async(id) =>{
        try {
            const res = await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({type: 'REMOVE_TRANSACTION', payload: id})
        } catch (error) {
             dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }
    const getAllTransactions = async() =>{
        try {
            const res = await axios.get('/api/v1/transactions')
            dispatch({
                type: "GET_ALL_TRANSACTIONS",
                payload: res.data.data 
             })
        } catch (error) {
             dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
            
        }
    } 
    const getTransaction = async(id) =>{
        try {
           const res =await axios.get(`/api/v1/transactions/${id}`)
        dispatch({type:"GET_TRANSACTION", payload:res.data.data})
           
        } catch (error) {
             dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
        }
    }

    const updateTransaction = async(id, transaction) =>{
        const config={
            headers:{
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.patch(`/api/v1/transactions/${id}`, transaction, config)
            dispatch({type: "UPDATE_TRANSACTION", payload:{
                data:res.data.data,
                id:id
            }})
        } catch (error) {
             dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            })
            
        }
    }
    return (
        <GlobalContext.Provider value = {
            {
            transactions: state.transactions,
            single: state.single,
            error:state.error,
            loading:state.loading,
            AddTransaction,
            removeTransaction,
            getAllTransactions,
            getTransaction,
            updateTransaction
        }}>
             {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
