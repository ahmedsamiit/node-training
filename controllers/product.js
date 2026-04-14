const ProductService = require("../domain/user/service/ProductService");

exports.getProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.render("admin", { 
            products: products, 
            haveProduct: products.length > 0,
            activeTab: "products"
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

exports.postCreateProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        await ProductService.createProduct({ name, price, description });
        res.redirect("/admin/products");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating product");
    }
};

exports.postUpdateProduct = async (req, res) => {
    const { id, name, price, description } = req.body;
    try {
        await ProductService.updateProduct(id, { name, price, description });
        res.redirect("/admin/products");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating product");
    }
};

exports.postDeleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        await ProductService.deleteProduct(id);
        res.redirect("/admin/products");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting product");
    }
};
