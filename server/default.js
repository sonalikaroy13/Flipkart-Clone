import {products} from './constants/product.js';
import Product from './model/productSchema.js';

const DefaultData = async () => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Data imported successfully");
    }catch{
        console.log("Error2: ", error.message);
    }
}

export default DefaultData;