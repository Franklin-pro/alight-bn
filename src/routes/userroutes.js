import express from "express";
import UserController from "../controller/usercontroller";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",DataChecker.UserRegisterEmpty,DataChecker.EmailExisting,Validator.UserAccountRule(),Validator.InputValidator,UserController.CreateUser)
router.get("/",VerifyAccess("admin"),UserController.GetAllUser)
router.delete("/",VerifyAccess("admin"),UserController.DeleteAllUser)
router.get("/:id",VerifyAccess("admin"),UserController.GetOneUser)
router.delete("/:id",VerifyAccess("admin"),UserController.DeleteOneUser)
router.patch("/:id",VerifyAccess("admin"),UserController.UpdateUser)
router.post("/login",UserController.Login)
export default router