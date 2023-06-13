import express from 'express';
import 'dotenv/config';

import { v1 } from './api/v1';
import { v2 } from './api/v2';

const server = express();

// Configuring server
server.use(express.json());
server.use('/api/v1', v1); // Version 1.x
server.use('/api/v2', v2); // Version 2.x


export { server };