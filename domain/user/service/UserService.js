const UserRepository = require("../repository/UserRepository");

module.exports = {
    getAllUsers: async () => {
        return await UserRepository.findAll();
    },
    authenticate: async (email, password) => {
        const user = await UserRepository.findByEmail(email);
        if (user && user.password === password) { // In real app, use bcrypt to compare
            return user;
        }
        return null;
    },
    registerUser: async (email, password) => {
        const existingUser = await UserRepository.findByEmail(email);
        if (existingUser) {
            throw new Error("User already exists");
        }
        return await UserRepository.save({ email, password });
    },
    deleteUser: async (id) => {
        return await UserRepository.delete(id);
    },
    updateUser: async (id, userData) => {
        return await UserRepository.update(id, userData);
    }
};
