const getAllTools = (req, res) => {
  res.send("get all tools here ");
};

const addATool = (req, res) => {
  res.send("add a tool");
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
