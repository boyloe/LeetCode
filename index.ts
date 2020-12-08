//12-08-2020 Reverse integer
function reverse(x: number): number {
    if ( x < (-2)**31 || x > 2**31 ) {
        return 0
    } else {
        return parseInt(x.toString().split('').reverse().join(''))
    }
};