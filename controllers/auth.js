const bcrypt = require("bcrypt");
const mysql = require("mysql");
const db = require("../routes/db-config");
const ran = require("../routes/db-config")




exports.signup = (req, res) => {
    console.log(req.body);
    const { name, email, password, repassword } = req.body;
    db.query('SELECT email from users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                return res.render("signup", {
                    message: 'The email is already in use'
                })
            } else if (password != repassword) {
                return res.render("signup", {
                    message: 'Password dont match'
                });
            }
        }
         let hashedPassword = await bcrypt.hash(password, 8);

        userid = ran.randm(1,9999)
        db.query('INSERT INTO users SET ?', { uid:userid, name: name, email: email, password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                return res.render("home", {
                    message: 'User registered',
                });
            }
        })
    })
}
   
  
exports.login = async (req, res) =>{
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
         if(results.length > 0) {
     const validpass = await bcrypt.compare(password, results[0].password)
     if(email == "admin@project.com" && validpass){
        res.render("admin/admin");
     }else if( email === results[0].email && validpass)
     res.render("customer/chome",{
        cname: results[0].name,
        uid : results[0].uid,
    });
     else
     res.render("login");}else {res.render("login")}

    })
    }

    exports.logout = (req, res)=> {
    res.redirect('/login');
};







