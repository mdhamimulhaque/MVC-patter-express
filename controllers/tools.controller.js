const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

const getAllTools = async (req, res, next) => {
  try {
    const db = getDb();
    const { page, limit } = req.query;
    const tools = await db
      .collection("tools")
      .find({})
      .project({ _id: 0 })
      .limit(+limit)
      .skip(+page * limit)
      .toArray();
    res.status(200).json({ status: true, data: tools });
  } catch (error) {
    next(error);
  }
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

    res.status(200).json({
      success: true,
      message: `Tool added with id: ${result.insertedId}`,
    });
  } catch (error) {
    next(error);
  }
};
const getToolDetails = async (req, res, next) => {
  try {
    const db = getDb();
    const id = req.params;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ status: false, error: "Not valid tool ID" });
    }
    const tool = await db.collection("tools").findOne({ _id: ObjectId(id) });
    if (!tool) {
      return res
        .status(400)
        .json({ status: false, error: "Couldn't find a tool with this id" });
    }
    res.status(200).json({ status: true, data: tool });
  } catch (error) {
    next(error);
  }
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
