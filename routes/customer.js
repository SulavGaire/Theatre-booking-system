const express = require('express');
const router = express.Router();
const db = require('./db-config');
const book = require("../controllers/customer")

router.get("/booking/:uid",book.home);
router.post("/booking",book.bkfunc);
router.post("/seats",book.seats)
router.get("/seats",(req,res)=>{res.render("seats")})
router.get("/chome",(req,res)=>{res.render("chome")})
// router.post("/buy/:rid",book.buy);
router.post("/ticket",book.ticket);
router.use("/logout",book.logout);
// router.post("/ticket",book.lastone);



module.exports = router;