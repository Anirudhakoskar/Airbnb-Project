const User = require("../models/user.js");


module.exports.signupForm = async (req,res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req,res) => {
try{
    let {username,email,password} = req.body;
    const newUser = new User({username,email});
    let registeredUser = await User.register(newUser,password);
    
    req.flash("success","WelCome to WanderLust!");
    res.redirect("/listings");
} catch(err){
    req.flash("error",err.message);
    res.redirect("/signup");
}
};


module.exports.loginForm = async (req,res) =>{
    res.render("users/login.ejs");
};

module.exports.login = async (req,res) => {
        req.flash("success","WelCome back to WanderLust");
        let redirect = res.locals.redirectUrl || "/listings";
        res.redirect(redirect);
 
};

module.exports.logout = (req,res,next)=> {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    })
};