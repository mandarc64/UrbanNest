import express from 'express';
import { bookVisit, cancelBooking, createUser, fav, getAllBookings, getallfav } from '../controllers/userCntrl.js';
const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",getAllBookings)
router.post("/removeBookings/:id", cancelBooking)
router.post("/tofav/:rid", fav)
router.post("/getallfav/",getallfav)

export {router as userRoute}