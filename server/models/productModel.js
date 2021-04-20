const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        modelname: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            maxlength: 2000
        },
        color: {
            type: String,
            trim: true
        },
        status: {
            type: String,
            trim: true
        },
        productkey: {
            type: Number
        },
        price: {
            type: Number,
            trim: true,
            maxlength: 32
        },
        category: {
            type: String,
            required: true
        },
        subcategory: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);

