const Product = require("../models/Product");
 const  {AppDataSource}  = require("../../../data-source");

 const productRepository = AppDataSource.getRepository(Product);

 module.exports = {
    findAll: async () => {
        return await productRepository.find();
    },
    findById: async (id) => {
        return await productRepository.findOneBy({ id });
    },
    save: async (productData) => {
        const product = productRepository.create(productData);
        return await productRepository.save(product);
    },
    delete: async (id) => {
        return await productRepository.delete(id);
    },
    update: async (id, productData) => {
        return await productRepository.update(id, productData);
    }
};