
import express from "express";
import userroutes from "./userroutes";
import programroutes from "./programroutes";
import testimonialroutes from "./testimonialroutes";
import stockroutes from "./stockroutes";
import Applyroutes from "./applyroutes";
import jobRoutes from "./jobRoutes"
import blogrouter from "./blogroutes";
import commentroutes from "./commentroutes";

const router=express.Router();

router.use("/user",userroutes)
router.use("/job",jobRoutes);
router.use("/apply",Applyroutes)
router.use("/program",programroutes)
router.use("/testimonial",testimonialroutes)
router.use("/comment",commentroutes)
router.use("/stock",stockroutes)
router.use("/blog",blogrouter)





export default router