const express = require("express");
const {getAllUsers,
    getUserEmail,
    createNewUser,
    deleteUser,
    login
 } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:email", getUserEmail);

//POST
router.post("/", createNewUser);
router.post("/login", login);
router.delete("/:email",  deleteUser);


module.exports = router;
