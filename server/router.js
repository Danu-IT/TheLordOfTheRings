import { Router } from "express";

const router = new Router();

router.get("/feature-flags", (req, res) => {
  res.send({ isTelegramShareEnabled: true });
});

export default router;
