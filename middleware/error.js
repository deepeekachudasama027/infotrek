const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err,req,res,next) => {
    let error = {...err}
    //Console log the error
    console.log(err.stack.red);
    //Mongoose bad objectID
    if(err.name === 'CastError'){
        const message = 'registration Not Found';
        error = new ErrorResponse(message,404);
    }

    res.status(error.statusCode || 500).json({success: false, error: error.message || 'Server Error'});
}

module.exports = errorHandler;