const express = require("express");
const userController = require("../controller/user.controller");
const pool = require("../db");
const router = express.Router();

//1. Tạo user

router.get("/users/add",(req,res)=>{
    let sql=`insert into users(img,name,phone,email,facebook,password,tags,title,msnv) values("https://i.mama","Nguyen An","02020202","abc@gmail.com","https:facebook.com","3663","[DEV]","CTO","X")`;
    db.query( sql , function(err, data) {
        if (err) throw err;
        res.send(data); 
    });
});
//2. đăng nhập với json
router.get("/json",(req,res)=>{
    let sql=`select * 
            from users
            inner join user_info on users.user_id= user_info.user_id
            inner join user_resume on users.user_id=user_resume.user_id`
});
router.get("/users", userController.DemoUser);
// http://localhost:3000/api/users
module.exports = router;
