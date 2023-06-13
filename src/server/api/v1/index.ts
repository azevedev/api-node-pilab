import { Router } from 'express';
import { SchoolsController } from './controllers/Schools';

const api = Router();

api.get('/', SchoolsController.ok);

api.get('/escolas', SchoolsController.get);

export { api as v1 };