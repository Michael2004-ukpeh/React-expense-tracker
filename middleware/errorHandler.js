const {CustomAPIError} =require('../errors/customError')

const errorMiddleware = (err,req,res,next) =>{
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({
            success: false,
            data: [],
            msg: err.message
        })
    }else if(err.name === 'ValidationError'){
        const messages = Object.values(err.errors).map(val => val.message)
         return res.status(400).json({
             success: false,
             data: [],
             msg: messages
         })
    }

    return res.status(500).json({
        success:false,
        data: [],
        msg: "Server Error, something went wrong please try again"
    })
}
module.exports = errorMiddleware