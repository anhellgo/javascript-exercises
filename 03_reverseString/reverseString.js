const reverseString = function(word) {
    let narray = word.split('')
    let nword = ''
    for (let i = (narray.length - 1); i >= 0; i--) {
        nword += narray[i]
    }
    return nword

};

// Do not edit below this line
module.exports = reverseString;
