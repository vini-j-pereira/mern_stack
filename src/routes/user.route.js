const route = require('express').Router();
const userController = require('../controllers/user.controller');

const { validId, ValidUser, validUser } = require("../middlewares/global.middlewares");

route.post("/", userController.create );
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findByid);
route.patch("/:id", validId, validUser, userController.update);

module.exports = route;