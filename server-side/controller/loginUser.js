const Users = require("../model/users");

exports.loginUser = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      res.status(401).json({
        statusCode: 401,
        message: "check your inputs!",
      });
    }
    const findUser = await Users.findOne({ name }).select("+password");
    const login = await findUser.comparePassword(password);
    if(login){
        res.status(200).json({
            statusCode: 200,
            message: "Successfully login"
        })
    }
  } catch (error) {
    res.status(500).json({
        statusCode: 500,
        message: "Something went wrong"
    })
  }
  next()
};
