import express from "express";
import { callbackHandler } from "../../handlers/company/callback";

const router = express.Router();

router.post("/hooks/callback", callbackHandler);

export default router;
