const errorMiddleware = (error, req, res, next) => {
    const statusCode = error.statusCode || 500

    if (!error.isOperational) {
        console.error(error);

        return res.status(500).json({
            success: false,
            data: null,
            error: {
                message:"Internal server error",
                statusCode:500
            }
        })
    }

    return res.status(statusCode).json({
        success: false,
        data: null,
        error: {
            message:error.message,
            statusCode:statusCode
        }
    })
};

module.exports = errorMiddleware