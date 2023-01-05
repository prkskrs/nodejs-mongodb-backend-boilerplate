// Import Dependencies
import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [80, "Name should be under 80 characters."],
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
        type: String,
        required: [true, "Please provide gender"],
        enum: {
            values: ["MALE", "FEMALE", "OTHERS"],
            message: "Please choose MALE, FEMALE, OTHERS",
        },
    },
    designation: {
      type: String,
    },
    employeeNumber: {
      type: Number,
    },
    bloodGroup:{
        type:String
    },
    phoneNumber: {
        type: String,
        required: [true, "Please provide phone number"],
        trim: true,
    },
    placeOfWork:{
        type:String
    },
    address:{
        type:String
    },
    avatar: {
        type: String,
        trim: true,
    }
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model("User", userSchema);
export default User;
