const util = require("util");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const Users = require("../model/users");

env.config({ path: "./.env" });

exports.isAuthenticated = async (req, res, next) => {
  const userToken = req.headers.authorization;
  let tokens;
  if (userToken && userToken.startsWith("Bearer")) {
    tokens = userToken.split("")[1];
  }
  const promisifyToken = await util.promisify(jwt.verify)(
    tokens,
    process.env.SECRET_TOKEN
  );

  const user = await Users.findById(promisifyToken.id);
  if (!user) {
    res.status(404).json({
      statusCode: 404,
      message: "User Not Found!",
    });
  }
  res.status(200).json({
    statusCode: 200,
    message: "User Found",
  });
  next()
};
