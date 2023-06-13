import { Router } from 'express';

const v2 = Router();


v2.get('/v2/', (req, res) => {
    return res.send('Olá Dev!!!!');
});

v2.post('/v2/teste', (_, res) => {
    return res.send('Post: Olá Dev!!!!');
});

export { v2 };