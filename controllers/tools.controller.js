const getAllTools = (req, res) => {
  res.send("get all tools here ");
};

const addATool = (req, res) => {
  res.send("add a tool");
};
const getToolDetails = (req, res) => {
  res.send("Tool Details route");
};

module.exports = {
  getAllTools,
  addATool,
  getToolDetails,
};
