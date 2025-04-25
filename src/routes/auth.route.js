import express from "express"
import { checkAuth, login, logout, signup,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import {   addWorkout, getUserDashboard, getWorkoutsByDate } from "../controllers/auth.controller.js";
import { endStream, getStream, streamControls } from "../controllers/stream.controller.js";
import { AiSummary } from "../controllers/ai.controller.js";

const router = express.Router()

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

router.get("/user/aisummary/:id", protectRoute, AiSummary);
router.get("/user/get-stream/:id", protectRoute, getStream);
router.get("/user/end-stream/:id", protectRoute, endStream);
router.get("/user/stream-control/:id/:action/:streamId", protectRoute, streamControls);
router.get("/user/dashboard", protectRoute, getUserDashboard);
router.get("/user/workout", protectRoute, getWorkoutsByDate);
router.post("/user/workout", protectRoute, addWorkout);

export default router;
