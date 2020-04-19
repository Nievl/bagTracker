const { Router } = require("express");
const { getBags, newBag, deleteBag, editBag, getBag } = require("./querys/bags");

const router = Router();

router.get("/query/bags", getBags);
router.get("/query/bag/:id", getBag);
router.put("/query/bag", newBag);
router.delete("/query/bag/:id", deleteBag);
router.post("/query/bag", editBag);

router.get("/query/users", getBags);
router.get("/query/user/:id", getBag);
router.put("/query/user", newBag);
router.delete("/query/user", deleteBag);
router.post("/query/user", editBag);

module.exports = router;
