const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Returns a list of users
 */
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

module.exports = router;
