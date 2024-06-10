import express from "express";
import {
  ProductById,
  ProductCreate,
  ProductIndex,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", ProductIndex);
router.get("/:id", ProductById);
router.post("/", ProductCreate);

export default router;
