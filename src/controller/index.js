const howoldController = (req, res) => {
    const { query: { dob } } = req;
    res.status(200).json({
        status: 'success',
        message: 'Good Boy'
    })
}

export default howoldController;
