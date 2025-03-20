const jwt = require("jsonwebtoken");
const env = require("dotenv");
const Users = require("../model/users");

env.config({ path: "./.env" });

exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ statusCode: 401, message: "Unauthorized" });
  }

  try {
    const promisifyToken = jwt.verify(token, process.env.SECRET_TOKEN);

    const user = await Users.findById(promisifyToken.id);
    res.status(200).json({
      statusCode: 200,
      user,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong, Please login or create Account",
    });
  }

  next();
};
