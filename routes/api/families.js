const router = require("express").Router();
const familiesController = require("../../controllers/familiesController");

// Matches with "/api/families"
router.route("/")
  .get(familiesController.findAll)
  .post(familiesController.create);

// Matches with "/api/families/:id"
router
  .route("/:id")
  .get(familiesController.findById)
  .put(familiesController.update)

module.exports = router;
