const dobValidator = (req, res, next) => {
    const { query: { dob } } = req;
    if(!dob) {
        res.status(400).json({
            status: 'error',
            message: 'Parameter dob is missing!'
        });
        return;
    }
    next();
}
export default dobValidator;
