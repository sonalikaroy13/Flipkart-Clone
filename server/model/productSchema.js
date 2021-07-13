import Mongoose from "mongoose";


const productSchema = new Mongoose.Schema({
    id: String,
    url: String,
    detailURL: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

const products = Mongoose.model('product', productSchema);

export default products;