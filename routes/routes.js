const express = require("express");
const router = express.Router();
const { getAllProducts, stupas,stencil,stepcil,centric,centricalss,centraline } = require("../controllers/controllers");

router.route("/").get(getAllProducts);
router.route("/testing").get(stupas);
router.route("/poster").post(stencil);
router.route("/poster").put(stepcil);
router.route("/poster").delete(centric);
router.route("/poster").patch(centricalss);
router.route("/poster").head(centraline);

module.exports = router;
