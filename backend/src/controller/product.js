const {Router} = require('express');
const { productUpload } = require('../../multer');
const productRouter = Router();


productRouter.get("/get-product", async(req, res) => {
    // res.send('Product Route');
    try{
        const productfind = await productModel.find();
        if(!productfind){
            return res.status(400).json({message: 'No product found'});
        }
        const products = productfind.map(product => {
            return{
                name: product.name,
                description: product.description,
                category: product.category,
                tags: product.tags,
                price: product.price,
                stock: product.stock,
                email: product.email,
                images: product.images,
                createdAt: product.createdAt
            }
        });
        res.status(200).json({products: products});
    }catch{
        console.error(err);
    }
})

productRouter.post('/post-product',productUpload.array('files'),async (req, res) => {
    const{name, description, category, tags, stock, email, price} = req.body;
    const images = req.files.map(file => file.path);
    try{
        const seller = await productModel.findOne({email: email});
        if(!seller){
            return res.status(400).json({message: 'Seller not found'});
        }

        if(images.length < 1){
            return res.status(400).json({message: 'Please upload at least one image'});
        }

        const newProduct = await productModel.create({
            name:name,
            description:description,
            category:category,
            tags:tags,
            stocks:stock,
            email:email,
            price:price,
            images:images
        });
        res.status(201).json({message: 'Product created successfully', product: newProduct
    });
}
    catch(error){
        console.error(error);
    }
})


module.exports = productRouter;