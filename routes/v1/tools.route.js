const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const viewCount = require("../../middlewares/viewCount");
const limiter = require("../../middlewares/limitter");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("get all tools");
// });
// router.post("/", (req, res) => {
//   res.send("post a tool");
// });

router
  .route("/")
  /**
   * @api {get} /tools - All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(toolsController.getAllTools)
  /**
   * @api {post} /tools - Add tool
   * @apiDescription Add a tool
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(toolsController.addATool);

router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolDetails)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool);

module.exports = router;
