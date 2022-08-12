import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit({
    windowMs: 1000, // 1 sec
    max: 3, // 3 allowed calls
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next, options) => {
        res.status(options.statusCode).json({
            status: 'error',
            error: 'Too many requests, please try again later.'
        });
    }
})

export default apiLimiter;
