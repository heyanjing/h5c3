var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/my_database', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.once("open", function () {
    console.log("连接MongoDB")
});

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: {
        type: Number,
        default: 1
    }
});
var Users = mongoose.model("Users", userSchema);
var he = {
    name: "何彦静",
    age: 28
}
var he1 = {
    name: "何彦静1",
    age: 28
}
var chen = {
    name: "陈有兰",
    age: 28,
    sex:2
}

Users.create(he, function (err) {
    if (!err) {
        console.log("写入成功");
    } else {
        console.log(err);
    }
});

// conn.once("close", function () {
//     console.log("断开MongoDB连接")
// });
// mongoose.disconnect();