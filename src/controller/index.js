import moment from 'moment';

const howoldController = (req, res) => {
    const dob = moment(req.formatedDob).format('YYYY');
    const now = moment().format('YYYY');
    const age = now-dob;
    res.status(200).json({
        status: 'success',
        age
    })
}

export default howoldController;
