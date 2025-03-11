const Users = require("../model/users");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config({ path: "./.env" });

const userToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: 1000 * 60 * 60 * 24, // 1 day
  });
};

const sendResponse = (user, statusCode, res) => {
  const token = userToken(user._id);

  // create cookie
  const options = {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: true,
  };

  res.cookie("jwt", token, options);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.createUser = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      res.status(500).json({
        statusCode: 500,
        message: "Please check your input fields",
      });
    }
    const newUser = await Users.create(req.body);
    sendResponse(newUser, 201, res);
    next();
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "something went wrong",
    });
  }
};
