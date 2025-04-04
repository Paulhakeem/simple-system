const Shops = require("../model/shops");

exports.addShop = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      statusCode: 400,
      message: "Please Enter The Name",
    });
  }
  try {
    const newShop = await Shops.create(req.body);
    res.status(201).json({
      statusCode: 201,
      newShop,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Something Went Wrong!",
    });
  }
  next();
};
