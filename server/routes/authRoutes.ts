import express, { Router } from "express";
const router: Router = express.Router();

import auth from "../controllers/user";

router.route("/register").post(auth.register);
router.route("/login").post(auth.login);

module.exports = router;
