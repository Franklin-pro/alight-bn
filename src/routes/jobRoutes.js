import express from "express"
import jobController from "../controller/jobController.js";
import Validator from "../middlewares/validator.js";
import verifyaccess from "../middlewares/verifyaccess.js";
import datachecker from "../middlewares/datachecker.js";




const router=express.Router();


router.post("/",jobController.createjob);
router.post("/",verifyaccess("admin"),jobController.createjob);
router.get("/",jobController.getAlljob);
router.get("/:id",jobController.getOnejob);
router.delete("/",jobController.deleteAlljob);
router.delete("/:id",verifyaccess("admin"),jobController.deleteOnejob);
router.patch("/:id",verifyaccess("admin"),jobController.updatejob);



export default router