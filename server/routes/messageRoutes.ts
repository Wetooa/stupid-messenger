import express, { Router } from "express";
const router: Router = express.Router();

import message from "../controllers/message";

router.route("/:convo").get(message.getMessages).post(message.sendMessage);
router
  .route("/:convo/:id")
  .patch(message.editMessage)
  .delete(message.deleteMessage);

module.exports = router;
