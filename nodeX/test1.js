/**
 * Created by heyanjing on 2018/7/24 17:56.
 */
var Test1 = {
    add: function (param1, param2) {
        return param1 + param2;
    },
    sub: function (param1, param2) {
        return param1 - param2;
    }
}
exports.Test1 =Test1;
exports.x = "这是需要导出的x";
exports.add = function (param1, param2) {
    return param1 + param2;
}
//exports=module.exports;
module.exports.Test2={
    name:"test2"
}




