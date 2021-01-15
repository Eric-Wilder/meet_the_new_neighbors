const router = require("express").Router();
const familyRoutes = require("./families");

// family routes
router.use("/families", familyRoutes);

module.exports = router;
