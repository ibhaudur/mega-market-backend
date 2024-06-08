import express from "express";
import {
  ProductCreate,
  ProductIndex,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", ProductIndex);

router.post("/", ProductCreate);

export default router;
