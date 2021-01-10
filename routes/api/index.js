const router = require("express").Router();
const profileRoutes = require("./profiles");

// Profile routes
router.use("/profiles", profileRoutes);

module.exports = router;
