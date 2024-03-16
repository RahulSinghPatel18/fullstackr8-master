const express = require("express");
const router = express.Router();
const {
    homepage,
    signup,
    signin,
    signout,
    sendmail,
    forgetpassword,
    upload,
    createstories,
    blogs,
    showstories,
    listblog,
    currentuser,
    uploadBlog,
} = require("../controllers/indexController");
const { isLoggedIn } = require("../utils/auth");

router.get("/", isLoggedIn, homepage);
// router.route("/").get(homepage);

router.get("/loaduser", isLoggedIn, currentuser);

// post /signup - create user
router.post("/signup", signup);

// post /signin - login user
router.post("/signin", signin);

// get /signout - logout user
router.get("/signout", isLoggedIn, signout);

// /reset-password
// update/:id
// delete/:id

// get /send-mail - logout user
router.get("/send-mail", sendmail);

// get /forget-password - send mail
router.get("/forget-password/:id", forgetpassword);

// get /upload - upload image
router.get("/upload", isLoggedIn, upload);

// /delete-upload

// cloudinary.uploader.destroy('zombie', function(result) { console.log(result) });

// -------------------------------------------------------------
// get /create-blog - create bloge
router.post("/create-stories", isLoggedIn, createstories);

// get /show-stories - show all blogs of user
router.get("/show-stories", isLoggedIn, showstories);

// get /blogs - show all blogs
router.get("/blogs", blogs);

// get /save/:blogid - save the blog to list of the user
router.get("/list/:blogid", isLoggedIn, listblog);

// post /uploadBlog - save the blog to image to cloudinary
router.post("/uploadBlog", uploadBlog);

module.exports = router;
