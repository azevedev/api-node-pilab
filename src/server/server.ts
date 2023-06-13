import express from 'express';
import 'dotenv/config';

import { v1 } from './api/v1';
import { v2 } from './api/v2';

const server = express();

// Configuring server
server.use(express.json());
server.use(v1); // Version 1.x
server.use(v2); // Version 2.x


export { server };