const db = require("../routes/db-config");
const ran = require("../routes/db-config");
const bcrypt = require("bcrypt");
const moment = require("moment");

exports.movies =(req,res) => {
 db.query('SELECT * FROM movies',(err,results)=> {
    console.log(results);
    if(err) throw err;
    else 
    console.log(typeof(results))
  res.render("admin/movies",{title:"admin page",movie:results})}
  )}

  
  exports.addmovies = (req,res) => {
    console.log(req.body);
  const{mname,mgenre,mtime,mrate} = req.body;
  var mid = ran.randm(1,99999)
  db.query('INSERT INTO movies SET ?',{mid:mid, mname:mname, mgenre:mgenre, mtime:mtime, mrate:mrate},(err,results) => {
  if(err){
    console.log(err);
  }else{
    res.render("admin/admin");
    console.log("done");
  }})
  }

  exports.geteditmovies = (req,res) =>{
  const mid = req.params.mid;
  db.query('SELECT * FROM movies WHERE mid = ?',[mid],(err,results) => {
    if (err){
      console.log(err);
    }
    else {
      console.log(mid);
        res.render("admin/editmovies",{
          title: 'edit movies',
          movie : results[0]
        });
    }
  }
  )
};
  
exports.editmovies =(req,res) => {
  const{mid,mname,mgenre,mtime,mrate} = req.body;
  console.log(req.body);
   db.query('UPDATE movies SET mname=?, mgenre=?, mtime=?, mrate=? WHERE mid = ?',[mname,mgenre,mtime,mrate,mid],(err,results) => {
  if(err){
    console.log(err);
  }else{
    res.render("admin/admin");
    console.log("done");
  }})
  }



  exports.deletemovies =  (req,res) =>{
  const mid = req.params.mid;
  console.log(mid);
  db.query('DELETE FROM movies WHERE mid = ?',[mid],(err,results) => {
    if (err){
      console.log(err);
    }
    else {
      console.log(mid);
      res.render("admin/admin");
    }
  } )
};


//                              CUSSTOMERSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  
exports.customers =(req,res) => {
 db.query('SELECT * FROM users',(err,results)=> {
    console.log(results);
    if(err) throw err;
    else 
    console.log(typeof(results))
  res.render("admin/customers",{title:"admin page",customer:results})}
  )}


exports.addcustomers = (req, res) => {
    console.log(req.body);
    const { name, email, password, repassword } = req.body;
    db.query('SELECT email from users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                return res.render("admin/addcustomers", {
                    message: 'The email is already in use'
                })
            } else if (password != repassword) {
                return res.render("admin/addcustomers", {
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
                return res.render("admin/admin", {
                    message: 'User registered'
                });
            }
        })
    })
}

  exports.geteditcustomers = (req,res) =>{
  const uid = req.params.uid;
  db.query('SELECT * FROM users WHERE uid = ?',[uid],(err,results) => {
    if (err){
      console.log(err);
    }
    else {
      console.log(uid);
        res.render("admin/editcustomers",{
          title: 'edit customers',
          customer : results[0]
        });
    }
  }
  )
};
  
exports.editcustomers =(req,res) => {
  const{uid,name,email,password} = req.body;
  console.log(req.body);
   db.query('UPDATE users SET name=?, email=?, password=? WHERE uid = ?',[name,email,password,uid],(err,results) => {
  if(err){
    console.log(err);
  }else{ 
    res.render("admin/admin");
    console.log("done");
  }})
  }



  exports.deletecustomers =  (req,res) =>{
  const uid = req.params.uid;
  db.query('DELETE FROM users WHERE uid = ?',[uid],(err,results) => {
    if (err){
      console.log(err);
    }
    else {
      console.log(uid);
      res.render("admin/admin");
    }
  } )
};


///SEATS  
exports.seats =(req,res) => {
 db.query('select * from reservation natural join movies where reservation.mid = movies.mid;',(err,results)=> {
    if(err) throw err;
    else 
  res.render("admin/seats",{title:"seats page",seat:results})}
  )}


    exports.deleteseats =  (req,res) =>{
      console.log(req.body);
  const rid = req.params.rid;
  db.query('DELETE FROM reservation WHERE rid = ?',[rid],(err,results) => {
    if (err){
      console.log(err);
    }
    else {
      console.log("done");
      res.render("admin/admin");
    }
  } )
};


/////DASHHHHHHHHHHH
// exports.dash = (req,res) => {
//       let today = moment();
//       let currentdate = today.format('YYYY-MM-DD');
//       console.log(currentdate);
//       db.query('select distinct count(*) as count from book union select distinct count(*) from seats union select distinct count(*) from users',(err,result)=>{
//       console.log(result);
//       res.render("admin/dash",{
//         mnum : result[0].count,
//         totalseats : result[1].count,
//         books : result[0].count,
//         totusers : result[2].count,
//       })
//     }
//   )

// }
exports.dash = (req,res) => {
      let today = moment();
      let currentdate = today.format('YYYY-MM-DD');
      console.log(currentdate);
     let bdate = currentdate;
      db.query('select count(*) as tb from book where bdate=?',[bdate],(error,res1) =>{
        if(error){console.log(error)}
        else {console.log(res1)
          books = res1[0].tb;
          db.query('select sum(amount) as summ from payment where date = ?',[bdate],(error,res2) =>{
            if(error){console.log(error)} else{
            amt = res2[0].summ;
            db.query('select count(*) as totcust from reservation where date = ?',[bdate],(error,res3)=>{
                  if(error){console.log(error)} else {
              console.log(res3);
              totcust = res3[0].totcust;
               db.query('select distinct count(*) as count from book union select distinct count(*) from seats union select distinct count(*) from users union select distinct count(*) from movies group by mname union select count(*) from movies ',(err,result)=>{
                    if(error){console.log(error)} else {
                      console.log(result);
      res.render("admin/dash",{
        amt : amt,
        totcust : totcust,
        books : books,
        mnum : result[3].count,
        totalseats : result[1].count,
        books : result[0].count,
        totusers : result[2].count,
        tshow : result[4].count,

               })}

            })
          }})
          }})
        }
      })
    
    
    }
    exports.addseats = (req,res) => {
      console.log(req.body);
    const{sid,row,column} = req.body;
    console.log(req.body);

    db.query('INSERT INTO seats SET ?',{sid:sid, srow:row, scolumn:column},(err,results) => {
    if(err){
      console.log(err);
    }else{
      res.render("admin/admin");
      console.log("done");
    }})
    }

    exports.logout = (req, res)=> {
    res.redirect('/login');
};
