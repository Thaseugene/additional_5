module.exports = function check(str, bracketsConfig) {
    var arr = [];

    for (var i = 0; i < bracketsConfig.length; i++) {
        stri = String(bracketsConfig[i]).split(',');

        console.log(str.charAt(str.length - 1));
        if (~str.charAt(0).indexOf(stri[0]) && ~str.charAt(str.length - 1).indexOf(stri[1])) {
            return true;
        } else {
            return false;
        }
    }


}