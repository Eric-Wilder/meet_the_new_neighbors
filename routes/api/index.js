const router = require("express").Router();
const familyRoutes = require("./families");

// Book routes
router.use("/families", familyRoutes);

module.exports = router;
