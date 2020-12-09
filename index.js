//12-08-2020 Reverse integer
function reverseNumber(x) {
    if (x < Math.pow((-2), 31) || x > Math.pow(2, 31))
        return 0;
    var reversedNumber = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (reversedNumber < Math.pow((-2), 31) || reversedNumber > Math.pow(2, 31)) {
        return 0;
    }
    else {
        return reversedNumber;
    }
}
;
