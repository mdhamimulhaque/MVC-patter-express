const getAllTools = (req, res) => {
  res.send("get all tools here ");
};

const addATool = (req, res) => {
  res.send("add a tool");
};

module.exports = {
  getAllTools,
  addATool,
};
