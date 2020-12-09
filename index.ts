//12-08-2020 Reverse integer
function reverseNumber(x: number): number {
    if ( x < (-2)**31 || x > 2**31 ) 
        return 0    
    const reversedNumber = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x)
    if ( reversedNumber < (-2)**31 || reversedNumber > 2**31 ){
        return 0
    } else {
        return reversedNumber
    }
        
};