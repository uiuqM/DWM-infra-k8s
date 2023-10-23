const express = require("express");
const userController = require("../Controllers/userController");
const { signup, login, findAllUsers, findUser, updateUserName, deleteUser } =
  userController;
const userAuth = require("../Middlewares/userAuth");
const router = express.Router();

router.post("/signup", userAuth.saveUser, signup);
router.post("/login", login);
router.get("/users", findAllUsers);
router.get("/:id", findUser);
router.put("/:id", updateUserName);
router.delete("/:id", deleteUser);

module.exports = router;
