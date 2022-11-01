const express = require('express');
const router = express.Router();
const adminfunc = require("../controllers/admin");
const db = require('./db-config');

// /admin/movies
router.get("/movies",adminfunc.movies);
router.post("/addmovies",adminfunc.addmovies);
router.get("/addmovies",(req,res)=>{res.render("admin/addmovies")});
router.post("/editmovies",adminfunc.editmovies);
router.get("/editmovies/:mid",adminfunc.geteditmovies);
router.get("/deletemovies/:mid",adminfunc.deletemovies);


// /admin/customers
router.get("/customers",adminfunc.customers);
router.get("/addcustomers",(req,res)=>{res.render("admin/addcustomers")});
router.post("/addcustomers",adminfunc.addcustomers);
router.post("/editcustomers",adminfunc.editcustomers);
router.get("/editcustomers/:uid",adminfunc.geteditcustomers);
router.get("/deletecustomers/:uid",adminfunc.deletecustomers);

//
router.get("/dash",adminfunc.dash);
router.get("/admin",(req,res) => {res.render("admin/admin")});
router.get("/addseats",(req,res) => {res.render("admin/addseats")});
router.get("/seats",adminfunc.seats);
router.post("/addseats",adminfunc.addseats);
router.get("/deleteseats/:rid",adminfunc.deleteseats);
router.use("/logout",adminfunc.logout);
module.exports = router;