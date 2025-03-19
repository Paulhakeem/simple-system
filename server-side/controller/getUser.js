const jwt = require("jsonwebtoken");
const env = require("dotenv");
const Users = require("../model/users");

env.config({ path: "./.env" });

exports.isAuthenticated = async (req, res, next) => {

  const userToken = req.headers.authorization;

  if (userToken) {
    const tokens = userToken.split(" ")[1];
    try {
      const promisifyToken = jwt.verify(tokens, process.env.SECRET_TOKEN);

      const user = await Users.findById(promisifyToken.id);
      if (!user) {
        return res.status(404).json({
          statusCode: 404,
          message: "User Not Found",
        });
      }
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
  }

  next();
};
