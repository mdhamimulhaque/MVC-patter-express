const { getDb } = require("../utils/dbConnect");

const getAllTools = (req, res) => {
  res.send("get all tools here ");
};

const addATool = async (req, res, next) => {
  try {
    const db = getDb();
    const tool = req.body;

    const result = await db.collection("tools").insertOne(tool);
    console.log(result);

    if (!result.insertedId) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.send({
      success: true,
      message: `Tool added with id: ${result.insertedId}`,
    });
  } catch (error) {
    next(error);
  }
};
const getToolDetails = (req, res) => {
  res.send("Tool Details route");
};
const updateTool = (req, res) => {
  res.send("Update tool");
};
const deleteTool = (req, res) => {
  res.send("deleted tool");
};

module.exports = {
  getAllTools,
  addATool,
  getToolDetails,
  updateTool,
  deleteTool,
};
