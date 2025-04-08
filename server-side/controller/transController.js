const Transactions = require("../model/transaction");

// create transaction
exports.createtransaction = async (req, res, next) => {
  const { name, amount } = req.body;

  if (!name || !amount) {
    res.status(400).json({
      statusCode: 400,
      message: "Check your inputs",
    });
  }

  try {
    const create = await Transactions.create(req.body);
    if (create) {
      res.status(201).json({
        statusCode: 201,
        message: "Transaction created",
        create,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    });
  }
  next();
};

// get total tansactions
exports.getTrans = async (req, res) => {
  try {
    const { userId } = req.query
    const data = await Transactions.find({ userId });
    if (data) {
      res.status(200).json({
        statusCode: 200,
        data,
      });
    }
  } catch (error) {
    res.status(404).json({
      statusCode: 404,
      message: "Not Found",
    });
  }
};

// filter data
exports.filterExpe = async (req, res, next) => {
  try {
    const filter = await Transactions.find({ amount: { $lt: 0 }});
    if (filter) {
      return res.status(200).json({
        statusCode: 200,
        filter,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "something went wrong",
    });
  }
  next();
};


// filter data above 0

exports.filterIncome = async (req, res, next) => {
  try {
    const filter = await Transactions.find({ amount: { $gt: 0 } });
    if (filter) {
      return res.status(200).json({
        statusCode: 200,
        filter,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "something went wrong",
    });
  }
  next();
};