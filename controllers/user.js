const UserService = require("../domain/user/service/UserService");

exports.getAdmin = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.render("admin", { 
            users: users, 
            haveUser: users.length > 0,
            activeTab: "dashboard"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.render("admin", { 
            users: users, 
            haveUser: users.length > 0,
            activeTab: "users"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.postDeleteUser = async (req, res) => {
    const { id } = req.body;
    try {
        await UserService.deleteUser(id);
        res.redirect("/admin/users");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting user");
    }
};

exports.postUpdateUser = async (req, res) => {
    const { id, email, password } = req.body;
    try {
        const updateData = { email };
        if (password) updateData.password = password;
        await UserService.updateUser(id, updateData);
        res.redirect("/admin/users");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
};

exports.postCreateUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        await UserService.registerUser(email, password);
        res.redirect("/admin/users");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserService.authenticate(email, password);
        if (user) {
            res.status(200).json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred" });
    }
};