import express from "express";
import {
  ProductById,
  ProductCreate,
  ProductDelete,
  ProductIndex,
  ProductUpdate,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", ProductIndex);
router.get("/:id", ProductById);
router.post("/", ProductCreate);
router.put("/:id", ProductUpdate);
router.delete("/:id", ProductDelete);

export default router;
