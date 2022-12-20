import express from "express";
import {
  profileHandler,
  profileUpdateHandler,
  settingsHandler,
} from "../../handlers/company/admin";

const router = express.Router();

router.get("/", profileHandler);

router.post("/profile", profileUpdateHandler);

router.post("/settings", settingsHandler);

export default router;
