import express from "express"
const router = express.Router()

// import controllers
import {addUser} from "../controllers/userController.js"

router.route("/addUser").post(addUser)


export default router;