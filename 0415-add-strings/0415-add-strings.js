/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    let largeNum;
    let smallNum;

    if (num1.length >= num2.length) {
        largeNum = num1.split("").reverse();
        smallNum = num2.split("").reverse();
    } else {
        largeNum = num2.split("").reverse();
        smallNum = num1.split("").reverse();
    }
    let result = "";
    let ten = 0;
    let sum = 0;

    for (let i = 0; i < largeNum.length; i++) {
        if (i < smallNum.length) {
            sum = parseInt((parseInt(largeNum[i]) + parseInt(smallNum[i]) + ten) % 10);
            ten = parseInt((parseInt(largeNum[i]) + parseInt(smallNum[i]) + ten) / 10);
            result = sum + result;
        } else {
            sum = parseInt((parseInt(largeNum[i]) + ten) % 10);
            ten = parseInt((parseInt(largeNum[i]) + ten) / 10);
            result = sum + result;
        }
    }

    if (ten === 1) {
        result = ten + result;
    }

    return result;

};