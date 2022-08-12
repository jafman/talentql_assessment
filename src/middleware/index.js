const dobValidator = (req, res, next) => {
    const { query: { dob } } = req;

    if(!dob) {
        res.status(400).json({
            status: 'error',
            message: 'Parameter dob is missing!'
        });
        return;
    }

    const parsedDate = new Date(Number(dob));
    if(isNaN(parsedDate.getTime())){
        res.status(400).json({
            status: 'error',
            message: 'Invalid time stamp!'
        });
        return;
    }

    req.formatedDob = parsedDate;
    next();
}
export default dobValidator;
