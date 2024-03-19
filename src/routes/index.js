
import express from "express";
import userroutes from "./userroutes.js";
import programroutes from "./programroutes.js";
import testimonialroutes from "./testimonialroutes.js";
import stockroutes from "./stockroutes.js";
import Applyroutes from "./applyroutes.js";
import jobRoutes from "./jobRoutes.js"
import blogrouter from "./blogroutes.js";
import commentroutes from "./commentroutes.js";

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