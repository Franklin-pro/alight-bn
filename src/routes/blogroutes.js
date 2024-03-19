import express from "express";
import BlogController from "../controller/blogcontroller.js";
import verifyAccess from "../middlewares/verifyaccess.js"
import verifyAccessUsers from "../middlewares/verifyaccessusers.js";

const router=express.Router()

router.post("/",verifyAccess("admin"),BlogController.CreateBlog)
router.get("/",BlogController.GetAllBlog)
router.delete("/",verifyAccess("admin"),BlogController.DeleteAllBLogs)
router.get("/:id",BlogController.getOneBlog)
router.delete("/:id",verifyAccess("admin"),BlogController.deleteOneBlog)
router.patch("/:id",verifyAccess("admin"),BlogController.updateBlog)
router.put("/Like/:id",verifyAccessUsers,BlogController.Like)
router.put("/Dislike/:id",verifyAccessUsers,BlogController.DisLike)

export default router