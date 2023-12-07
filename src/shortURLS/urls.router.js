const router = require("express").Router({ mergeParams: true})
const controller = require("./urls.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const useRouter = require("../users/uses.router");

router.use("/:urlId/uses", controller.urlExists, useRouter);

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);
router.route("/:urlId").get(controller.read).put(controller.update).all(methodNotAllowed);

module.exports = router;
