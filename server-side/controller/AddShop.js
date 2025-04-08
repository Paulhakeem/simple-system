const Shops = require("../model/shops");

exports.addShop = async (req, res) => {
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
};

exports.getShops = async (req, res) => {
  try {
    const { userId } = req.query;
    const result = await Shops.find({ userId });
    if (!result) {
      return res.status(404).json({
        statusCode: 404,
        message: "Data Not found",
      });
    }
    res.status(200).json({
      statusCode: 200,
      result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Something Went wrong!",
    });
  }
};
