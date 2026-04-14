const { AppDataSource } = require("../../../data-source");
const User = require("../models/User");

const userRepository = AppDataSource.getRepository(User);

module.exports = {
    findAll: async () => {
        return await userRepository.find();
    },
    findByEmail: async (email) => {
        return await userRepository.findOneBy({ email });
    },
    findById: async (id) => {
        return await userRepository.findOneBy({ id });
    },
    save: async (userData) => {
        const user = userRepository.create(userData);
        return await userRepository.save(user);
    },
    delete: async (id) => {
        return await userRepository.delete(id);
    },
    update: async (id, userData) => {
        return await userRepository.update(id, userData);
    }
};
