const Users = require("../model/users");

exports.loginUser = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const findUser = await Users.findOne({ name });

    if(!findUser){
      return res.status(401).json({
        statusCode: 401,
        message: "Invalid credentials",
      })
    }
    const isMatch = await findUser.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        statusCode: 401,
        message: "Invalid credentials",
      })
    }
    req.session.userId = findUser._id  // Store user ID in session
    res.status(200).json({
      statusCode: 200,
      message: "Login successfully",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong",
    });
  }
  next();
};
