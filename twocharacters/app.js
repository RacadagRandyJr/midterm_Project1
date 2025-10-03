function alternate(s) {
    var arr = {};
    for (var i = 0; i < s.length; i++) {
        arr[s[i]] = 0;
    }
    var min = 0;
    for (var i in arr) {
        for (var j in arr) {
            if (i !== j) {
                let check1 = replaceString(arr, s, i, j);
                if (validateAlternatives(check1, i, j)) {
                    console.log(check1);
                    if (check1.length > min)
                        min = check1.length;
                }
            }
        }
    }
    return min;
}
function replaceString(arr, s, a, b) {
    let str = s;
    var pattern = "/{1}/g";
    var re = new RegExp(pattern);
    for (var i in arr) {
        if (i !== a && i !== b) {
            str = str.replace(new RegExp(i, "g"), "")
        }
    }
    return str;
}

function validateAlternatives(str, a, b) {
    let check = true;
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0 && str[i] !== a) {
            return false;
        }
        if (i % 2 === 1 && str[i] !== b) {
            return false;
        }
    }
    return check;
}