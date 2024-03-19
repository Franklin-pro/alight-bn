import express from "express";
import CommentController from "../controller/commentcontroller";
import verifyAccessUsers from "../middlewares/verifyaccessusers";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/:id",verifyAccessUsers,CommentController.CreateComment)
router.get("/",verifyAccessUsers,CommentController.getcomment)
router.get("/:id",verifyAccessUsers,CommentController.getOneComment)
router.delete("/:id",VerifyAccess("admin"),CommentController.deleteOneComment)
router.patch("/:id",VerifyAccess("admin"),CommentController.updateComment)
router.delete("/",VerifyAccess("admin"),CommentController.deleteAllComment)

export default router