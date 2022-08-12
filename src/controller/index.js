import moment from 'moment';

const howoldController = (req, res) => {
    const dob = moment(req.formatedDob).format('YYYY');
    const now = moment().format('YYYY');
    const age = now-dob;
    if(age < 0) {
        res.status(400).json({
            status: 'error',
            error: 'dob is in the future'
        })
    }else{
        res.status(200).json({
            status: 'success',
            age
        })
    }

}

export default howoldController;
