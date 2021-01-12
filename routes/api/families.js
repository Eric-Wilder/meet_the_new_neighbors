const router = require("express").Router();
const familiesController = require("../../controllers/familiesController");

// Matches with "/api/books"
router.route("/")
  .get(familiesController.findAll)
  .post(familiesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(familiesController.findById)
  .put(familiesController.update)
  .delete(familiesController.remove);

module.exports = router;
