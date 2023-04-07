import express from 'express';
const router  = express.Router();

import getCrypto from '../controllers/getCrypto.mjs';

router.get('/', getCrypto);

export default router;

