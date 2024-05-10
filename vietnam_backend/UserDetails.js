const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
    mobile: {type: String, unique: true},
    password: String,
    fname: String, 
    lname: String,
}, {
    collection: "UserInfo"
});
mongoose.model("UserInfo", UserDetailSchema);