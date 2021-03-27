const express = require("express");
const router = express.Router();
const Store = require("./Model");

router.route("/create").post((req, res)=>{

    const name = req.body.name;
    const birthday= req.body.name;
    const age= req.body.name;
    const address= req.body.name;
    const mobile= req.body.name;

    const newStore = new Store({
        name,
        birthday,
        age,
        address,
        mobile
    });

    newStore.save();

});

router.route("/store").get((req, res) => {
    Store.find()
        .then(foundStore => res.json(foundStore))
})

module.exports = router;