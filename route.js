import express from "express";
import SuppliersCtrl from "./index.js";
import db from "db";

const router = express.Router();
router.route("/login").post(SuppliersCtrl.apiPostLogin);
router.get(
  "/test",
  db.authenticate("jwt", { session: false }),
  SuppliersCtrl.apiTest
);
export default router;