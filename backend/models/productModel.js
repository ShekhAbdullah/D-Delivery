const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please Enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Price cannot exceed 4 characters"],
    maxLength: [8, "Please Enter product price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }
  ],
  category: {
    type: String,
    required: [true, "Please Enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter product stock"],
    maxLength: [4, "stock cannot exceed 4 characters"],
    default : 1
  },
  numOfReviews:{
      type: Number,
      default: 0
  },
  reviews:[
      {
          name:{
              type: String,
              required: true
          },
          rating:{
              type:Number,
              required: true
          },
          comment:{
              type: String,
          }
      }
  ],
createdAt:{
    type:Date,
    default:Date.now
}

});

module.exports = mongoose.model("Product",productSchema)
