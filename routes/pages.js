const express = require('express');
const router = express.Router();


router.get("/",(req,res) =>{res.render("home");});
router.get("/home",(req,res) =>{res.render("home");});
router.get("/af",(req,res) =>{res.render("dash");});
router.get("/signup",(req,res) =>{res.render("signup");});  
router.get("/login",(req,res) =>{res.render("login");});

module.exports = router;