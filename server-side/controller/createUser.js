const Users = require("../model/users");

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
    res.status(201).json({
      statusCode: 201,
      newUser,
      message: "Account created successfully",
    });
    next();
  } catch (error) {
    res.status(500).json({
        statusCode: 500,
        message: "something went wrong"
    })
  }
};
