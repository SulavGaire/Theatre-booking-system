const db = require("../routes/db-config");
const ran = require("../routes/db-config");
const bcrypt = require("bcrypt");



exports.home = (req,res) => {
  console.log(req.params);
  const uid = req.params.uid;
  res.render("customer/booking",{
    uid:uid,
  })}

exports.bkfunc = (req,res) => {
  console.log(req.body);
  const {uid,mname,time,snum,date} = req.body;
   rid = ran.randm(1,500);
  db.query('select mid,mrate from movies where mname = ? && mtime = ?',[mname,time],(err,result) =>{
    if(err){console.log(err)}
    else { console.log(result)
  mid = result[0].mid;
  mrate = result[0].mrate;
  const amount = snum * mrate;
 console.log(amount);
      db.query('insert into book set ?',{uid:uid,mid:mid,name:mname,rid:rid,mtime:time,snum:snum,bdate:date},(err,results)=>{
if(err){console.log(err)}
else{ console.log("done");
console.log(mid,time);
  db.query('select sid from seats where sid not in (select sid from reservation where mid = ? && mtime = ? && date =?)',[mid,time,date],(err,result)=>{
    if (err){console.log(err)}
    else {
      console.log(result);
  res.render("customer/seats",{
    rid : rid,
    seats : result,
uid : uid,
mname : mname,
time : time,
snum : snum,
amount : amount,
mid : mid,
date : date,
 });
      }})}
 })
}
  })}

exports.seats = (req,res) => {
  console.log(req.body);
  const{mname,snum,time,uid,seats,amount,date} = req.body;
  console.log(amount);
  db.query('select rid,mid from book where name = ? && uid = ? ',[mname,uid],(err,result) =>{
  if(err){console.log(err)}
  else { 
    let rid = result[0].rid;
    const mid = result[0].mid;
    if (snum == 1){
   db.query('insert into reservation set ?',{rid:rid,uid:uid,sid:seats,mid:mid,mtime:time,date:date},(err,result) => {
  if (err){console.log(err)}
  else { 
  res.render("customer/ticket",{
  uid : uid,
  rid : rid,
  pid : ran.randm(1,5000),
  mname : mname,
  mtime : time,
  amount : amount,
  seats : seats,
  mid : mid,
  date : date,
}
  )
  } 
})     
    }else {
    for(let i = 0; i < snum; i++){
  db.query('insert into reservation set ?',{rid:rid,uid:uid,sid:seats[i],mid:mid,mtime:time,date:date},(err,result) => {
  if (err){console.log(err)}
  else { if(i===0){
  res.render("customer/ticket",{
  uid : uid,
  rid : rid,
  pid : ran.randm(1,5000),
  mname : mname,
  mtime : time,
  amount :amount,
  seats : seats,
  mid : mid,
  date : date,
}
  );}else{
    console.log("hello");
  }
  } 
})}}
  }
})
}
exports.ticket = (req,res) => {
  console.log(req.body);
  const {pid,uid,mid,rid,amount,date} = req.body;
  db.query('insert into payment set ?',{uid:uid,pid:pid,rid:rid,mid:mid,amount:amount,date:date},(err,reslt)=>{
    if (err){console.log(err)}
    else {
    res.render("customer/chome",{uid:uid})};
  })
}


    exports.logout = (req, res)=> {
    res.redirect('/login');
};
