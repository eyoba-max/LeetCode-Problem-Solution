/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=x.toString();
    let reversed=num.split('').reverse().join('');
    for(let i=0;i<num.length;i++){
        if(num[i]!=reversed[i]){
            return false;
        }

    }
    return true;
};