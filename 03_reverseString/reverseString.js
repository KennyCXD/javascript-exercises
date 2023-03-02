const reverseString = function(input) {
    var stringSplit = input.split("")
    var reverseArray = stringSplit.reverse();
    var joined = reverseArray.join("");
    return joined
};

// Do not edit below this line
module.exports = reverseString;
