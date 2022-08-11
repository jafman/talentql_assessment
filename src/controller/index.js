const howoldController = (req, res) => {
    const { query } = req;
    console.log('Query:', query)
    res.status(200).json({
        status: 'success',
        message: 'Good Boy'
    })
}

export default howoldController;
