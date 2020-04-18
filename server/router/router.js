const { Router } = require("express");
const { getBags, newBag, deleteBag, editBag, getBag } = require("./querys/querys");

const router = Router();

router.get("/query/bags", getBags);
router.get("/query/bag", getBag);
router.put("/query/bag", newBag);
router.delete("/query/bag", deleteBag);
router.post("/query/bag", editBag);

module.exports = router;
