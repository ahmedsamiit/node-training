
const User = require("../models/user");

exports.getAdmin = (req, res) => {
    const users = User.fetchAll();
    res.render("admin", { 
        users: users , 
        haveUser: users.length > 0 ? true : false
    });
}

exports.postLogin = (req, res) => {
    
    const { email, password } = req.body;
    const user = new User(email, password);
    user.save();
    
    // Simple validation for demonstration
    if (user.email === "ahmed.sami@modeso.ch" && user.password === "123") {
        res.status(200).json({ success: true, message: "Login successful" });
    } else {
        res.status(401).json({ success: false, message: "Invalid email or password" });
    }
}