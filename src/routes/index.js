import { Router } from 'express';

const howoldRoute = Router();

howoldRoute.get('/', (req, res)=>{
    res.status(200).json({
        status: 'success',
        message: 'Good Boy'
    })
});

export default howoldRoute;
