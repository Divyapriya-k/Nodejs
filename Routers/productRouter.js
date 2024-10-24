import express from 'express';
import { createProduct, deleteProduct, getproducts, getproductsById, updateProduct } from '../Controllers/prodcutController.js';

const router = express.Router();

router.get("/getdata",getproducts)
router.get("/getdata/:id",getproductsById)
router.post("/create",createProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)
export default router;