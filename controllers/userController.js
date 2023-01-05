// Import Model
import User from "../models/user.js";

// Making Promise
import bigPromise from "../middlewares/bigPromise.js";

export const addUser = bigPromise(async (req, res, next) => {
  const {
    name,
    age,
    sex,
    designation,
    employeeNumber,
    bloodGroup,
    phoneNumber,
    placeOfWork,
    address,
    avatar,
  } = req.body;

  if (!name || !age || !sex) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  const existingUser = await User.findOne({ phoneNumber: phoneNumber });

  if (existingUser) {
    return res.status(400).json({
      success: true,
      message: "User Already Exists !",
    });
  }

  const user = await User.create({
    ...req.body
  })

  return res.status(201).json({
    success: true,
    message: "User Added Successfully !",
    data: user,
  });
});



export const getAllUser = bigPromise(async (req, res, next) => {
  const users = await User.find({})
    .lean()
    .catch((err) => {
      console.log(`error getting users :: ${err}`);
      return null;
    });

  if (users === null) {
    return res.status(400).json({
        success:false,
        message:"No user exists"
    })
  }

  return res.status(200).json({
    success:true,
    message:"Users Found!!",
    data:users
  })
});
