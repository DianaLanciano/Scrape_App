import mongoose from "mongoose";

const bagSchema = mongoose.Schema({
    title: String,
    brand: String,
    productLink: String,
    prevPrice: String,
    CurrPrice: String,
    image: String
});

const Bag = mongoose.model('Bag', bagSchema);

export default Bag;