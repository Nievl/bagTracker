const { Router } = require("express");
const { getBags, newBag, deleteBag, editBag, getBag } = require("./querys/bags");
const { getUser, getUsers, editUser, deleteUser, newUser } = require("./querys/users");

const router = Router();

router.get("/query/bags", getBags);
router.get("/query/bag/:id", getBag);
router.put("/query/bag", newBag);
router.delete("/query/bag/:id", deleteBag);
router.post("/query/bag", editBag);

router.get("/query/users", getUsers);
router.get("/query/user/:id", getUser);
router.put("/query/user", newUser);
router.delete("/query/user", deleteUser);
router.post("/query/user", editUser);

module.exports = router;
