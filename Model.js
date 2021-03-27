const mongoose = require("mongoose")

const StoresSchema = {
    name: String,
    birthday: String,
    age: String,
    address: String,
    mobile: String
}

const Store = mongoose.model("Store", StoresSchema);

module.exports = Store;