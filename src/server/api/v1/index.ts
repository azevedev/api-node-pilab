import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const v1 = Router();


v1.get('/v1/', (req, res) => {
    return res.send('Olá Dev!!!!');
});

v1.post('/v1/teste', (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.OK).json(req.body);
});

export { v1 };