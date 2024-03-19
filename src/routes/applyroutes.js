import express from  "express";
import ApplyJobController from "../controller/applyjobcontroller.js";
import VerifyAccess from "../middlewares/verifyaccess.js";


const router = express.Router()

router.post("/:id",VerifyAccess("admin"),ApplyJobController.ApplyOneJob);
router.get("/",ApplyJobController.getAllApplyjob);


export default router