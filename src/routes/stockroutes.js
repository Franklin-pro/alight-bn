import express from "express";
import StockController from "../controller/stockcontroller";
import verifyAcssess from "../middlewares/verifyaccess";
import verifyAccessUsers from "../middlewares/verifyaccessusers";

const router=express.Router()

router.post("/import",verifyAcssess("admin"),StockController.ImportProduct)
router.post("/export",verifyAccessUsers,StockController.ExportProduct)
router.get("/",verifyAccessUsers,StockController.GetAllStock)
router.delete("/",verifyAcssess("admin"),StockController.DeleteAllStock)
router.get("/:id",verifyAccessUsers,StockController.GetOneProduct)
router.delete("/:id",verifyAcssess("admin"),StockController.DeleteOneProduct)
router.patch("/:id",verifyAcssess("admin"),StockController.UpdateProduct)

export default router