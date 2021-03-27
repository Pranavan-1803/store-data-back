const express = require("express");
const router = express.Router();
const Store = require("./Model");

router.route("/create").post((req, res)=>{

    const name = req.body.name;
    const birthday= req.body.birthday;
    const age= req.body.age;
    const address= req.body.address;
    const mobile= req.body.mobile;

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