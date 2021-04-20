const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        orderKey: {
            type: String
        },
        customerKey: {
            type: Number
        },
        productKey: {
            type: Number
        },
        quantity: {
            type: Number,
            trim: true
        },
        unitprice: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        salesamount: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        taxamount: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        freight: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        orderdate: {
            type: Date,
            trim: true,
            required: true
        },
    },
    { timestamps: true }
);

orderSchema.virtual('user', {
    ref: 'user',
    localField: 'customerKey', 
    foreignField: 'customerkey', 
    justOne: true
  });

orderSchema.virtual('product', {
    ref: 'product',
    localField: 'productKey', 
    foreignField: 'productkey', 
    justOne: true
  });

orderSchema.set('toObject', { virtuals: true });
orderSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("order", orderSchema);