import express from "express";
import ProgramController from "../controller/programcontroller";
import VerifyAccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",VerifyAccess("admin"),ProgramController.PostProgram)
router.get("/",ProgramController.GetAllProgram)
router.delete("/",VerifyAccess("admin"),ProgramController.DeleteAllPorgram)
router.get("/:id",ProgramController.GetOneProgram)
router.delete("/:id",VerifyAccess("admin"),ProgramController.DeleteOneProgram)
router.patch("/:id",VerifyAccess("admin"),ProgramController.UpdateProgram)

export default router